import React, {useEffect, useRef, useState} from "react";
import "../css/scrollbar.css"

export const Scrollbar = ({children}: { children: React.ReactNode }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const scrollTrackRef = useRef<HTMLDivElement>(null);
    const scrollThumbRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
    const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);

    const [thumbHeight, setthumbHeight] = useState(150);

    function handleResize() {
        if (scrollTrackRef.current && contentRef.current) {
            const {clientHeight: trackSize} = scrollTrackRef.current
            const {clientHeight: contentVisible, scrollHeight: contentTotalHeight} = contentRef.current;
            setthumbHeight(
                Math.max((contentVisible / contentTotalHeight) * trackSize, 20)
            )
        }
    }

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current
            observer.current = new ResizeObserver(() => handleResize());
            observer.current.observe(content);
            content.addEventListener('scroll', handleThumbPosition)
            return () => {
                observer.current?.unobserve(content)
                content.removeEventListener('scroll', handleThumbPosition)
            };
        }
    }, [])

    function handleThumbPosition() {
        if (!contentRef.current || !scrollTrackRef.current || !scrollThumbRef.current) {
            return;
        }

        const {scrollTop: contentTop, scrollHeight: contentHeight} = contentRef.current;
        const {clientHeight: trackHeight} = scrollTrackRef.current;

        let newTop = (contentTop / contentHeight) * trackHeight;
        newTop = Math.min(newTop, trackHeight - thumbHeight);

        const thumb = scrollThumbRef.current;

        requestAnimationFrame(() => {
            thumb.style.top = `${newTop}px`;
        });

    }

    function handleThumbMousedown(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setScrollStartPosition(e.clientY);
        if (contentRef.current) {
            setInitialContentScrollTop(contentRef.current.scrollTop);
            setIsDragging(true);
        }
    }

    function handleThumbMouseup(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();
        if (isDragging) {
            setIsDragging(false);
        }
    }

    function handleThumbMousemove(e: MouseEvent) {
        if (contentRef.current) {
            e.preventDefault();
            e.stopPropagation();
            if (isDragging) {
                const {
                    scrollHeight: contentScrollHeight,
                    clientHeight: contentClientHeight
                } = contentRef.current;

                const deltaY = (e.clientY - scrollStartPosition) * (contentClientHeight / thumbHeight)

                const newScrollTap = Math.min(initialContentScrollTop + deltaY, contentScrollHeight - contentClientHeight)

                contentRef.current.scrollTop = newScrollTap;
            }
        }
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleThumbMousemove);
        document.addEventListener("mouseup", handleThumbMouseup);
        return () => {
            document.removeEventListener("mousemove", handleThumbMousemove);
            document.removeEventListener("mouseup", handleThumbMouseup);
        }
    }, [handleThumbMousemove, handleThumbMouseup]);

    function handleTrackClick(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        const {current: track} = scrollTrackRef;
        const {current: content} = contentRef;
        if (track && content) {
            const {clientY} = e;
            const target = e.target as HTMLDivElement;
            const rect = target.getBoundingClientRect();
            const trackTop = rect.top;
            const thumbOffset = -(thumbHeight / 2);
            const clickRatio = (clientY - trackTop + thumbOffset) / track.clientHeight;
            const scrollAmount = Math.floor(clickRatio * content.scrollHeight);
            content.scrollTo({
                top: scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={"relative h-full w-full overflow-hidden"}>
            <div id={"custom-scrollbars-content"}
                 className={"overflow-auto scrollbar-none h-full w-full py-0 pr-12.5 content"}
                 ref={contentRef}>
                {children}
            </div>
            <div
                className={"absolute top-0 right-0 h-full w-12.5 p-4 grid place-items-center pointer-events-none"}>
                <div aria-controls={"custom-scrollbars-content"}
                     role={"scrollbar"}
                     className={"h-full relative w-4 pointer-events-auto flex justify-center"}>
                    <div
                        className={"bottom-0 top-0 cursor-pointer absolute w-2 hover:w-full h-full bg-gray-600/50 rounded-3xl pointer-events-auto transition-all"}
                        ref={scrollTrackRef}
                        style={{cursor: isDragging ? "grabbing" : undefined}}
                        onClick={handleTrackClick}></div>
                    <div className={"absolute w-full bg-[#262626] rounded-3xl transition-colors"}
                         ref={scrollThumbRef}
                         onMouseDown={handleThumbMousedown}
                         style={{
                             height: `${thumbHeight}px`,
                             cursor: isDragging ? "grabbing" : 'grab'
                         }}></div>
                </div>
            </div>
        </div>
    )
}