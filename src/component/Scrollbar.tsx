import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import "../css/scrollbar.css"
import "../index.css"
import {Languages, SunMoon} from "lucide-react";
import {useActiveSection} from "../hooks/useActiveSection.tsx";

export const Scrollbar = forwardRef<HTMLDivElement, { children: React.ReactNode }>(
    ({children}, ref) => {
        const contentRef = useRef<HTMLDivElement>(null);
        useImperativeHandle(ref, () => contentRef.current as HTMLDivElement)
        const scrollTrackRef = useRef<HTMLDivElement>(null);
        const scrollThumbRef = useRef<HTMLDivElement>(null);
        const observer = useRef<ResizeObserver | null>(null);
        const [isDragging, setIsDragging] = useState(false);
        const [scrollStartPosition, setScrollStartPosition] = useState<number>(0);
        const [initialContentScrollTop, setInitialContentScrollTop] = useState<number>(0);
        const [smallTopBar, setSmallTopBar] = useState<boolean>(false);
        const activeSection = useActiveSection(contentRef.current as HTMLDivElement, ["home", "about", "projects", "contact"]);

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

            if (newTop > 2) {
                setSmallTopBar(true);
            } else {
                setSmallTopBar(false);
            }

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

                    contentRef.current.scrollTop = Math.min(initialContentScrollTop + deltaY, contentScrollHeight - contentClientHeight);
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

        useEffect(() => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    // @ts-ignore
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement && contentRef.current) {
                        // Get the position relative to the scroll container
                        const elementRect = targetElement.getBoundingClientRect();
                        const containerRect = contentRef.current.getBoundingClientRect();

                        // Calculate position within the container
                        const relativeTop = contentRef.current.scrollTop + (elementRect.top - containerRect.top);

                        contentRef.current.scrollTo({
                            top: relativeTop - 250,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }, []);

        return (
            <div className={"relative h-full w-full overflow-hidden"}>
                <div id={"custom-scrollbars-content"}
                     className={"overflow-auto scrollbar-none h-full w-full py-0 pr-12.5 content"}
                     ref={contentRef}>
                    {children}
                </div>
                <div className={"flex flex-col items-center justify-center"}>
                    <div
                        className={`absolute h-25 bg-gray-50/40 z-100 transition-all duration-200 flex flex-row
                    ${smallTopBar ? "w-6xl top-10 rounded-3xl py-6 px-10 drop-shadow-xl drop-shadow-black/30 backdrop-blur-2xl" : "w-full rounded-b-3xl top-0 right-0 py-4 px-15 backdrop-blur-xl drop-shadow-black/30"}`}>
                        <div className={"h-full min-w-full flex flex-row justify-between items-center"}>
                            <div
                                className={`h-full flex flex-row justify-center items-center ${smallTopBar ? "gap-25" : "gap-30"}`}>
                                <a href={"#home"} className={`text-black text-3xl font-[DINdong] p-5 rounded-3xl transition-all duration-500 ${activeSection == "home" && "shadow-(--inset-top-bar-button-shadow) shadow-[#e0e0e0]"}`}>Accueil</a>
                                <a href={"#about"} className={`text-black text-3xl font-[DINdong] p-5 rounded-3xl transition-all duration-500 ${activeSection == "about" && "shadow-(--inset-top-bar-button-shadow) shadow-[#e0e0e0]"}`}>Parcours</a>
                                <a href={"#projects"} className={`text-black text-3xl font-[DINdong] p-5 rounded-3xl transition-all duration-500 ${activeSection == "projects" && "shadow-(--inset-top-bar-button-shadow) shadow-[#e0e0e0]"}`}>Projects</a>
                                <a href={"#contact"} className={`text-black text-3xl font-[DINdong] p-5 rounded-3xl transition-all duration-500 ${activeSection == "contact" && "shadow-(--inset-top-bar-button-shadow) shadow-[#e0e0e0]"}`}>Contact</a>
                            </div>
                            <div className={"h-full flex flex-row justify-center items-center gap-7"}>
                                <div className={"h-full w-0.5 backdrop-invert-100"}></div>
                                <Languages className={"size-9"}/>
                                <SunMoon className={"size-9"}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={"absolute top-30 right-0 h-full w-12.5 px-4 pt-4 pb-40  place-items-center pointer-events-none z-20"}>
                        <div aria-controls={"custom-scrollbars-content"}
                             role={"scrollbar"}
                             className={"h-full relative w-4 pointer-events-auto flex justify-center"}>
                            <div
                                className={"hidden xl:grid bottom-0 top-0 cursor-pointer absolute w-2 hover:w-full h-full bg-gray-600/50 backdrop-invert-75 rounded-3xl pointer-events-auto transition-all"}
                                ref={scrollTrackRef}
                                style={{cursor: isDragging ? "grabbing" : undefined}}
                                onClick={handleTrackClick}></div>
                            <div className={"hidden xl:grid absolute w-full bg-[#262626] rounded-3xl transition-colors"}
                                 ref={scrollThumbRef}
                                 onMouseDown={handleThumbMousedown}
                                 style={{
                                     height: `${thumbHeight}px`,
                                     cursor: isDragging ? "grabbing" : 'grab'
                                 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })