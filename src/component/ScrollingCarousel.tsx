import { useEffect, useRef, useState } from "react";
import "../index.css"

type CarouselElement = {
    name: string,
    imagePath: string,
}

type MarqueeTrackProps = {
    items: CarouselElement[]
    reverse?: boolean
    duration: string
}

function carouselElements(elements: CarouselElement[]) {
    return (
        elements.map((lang, index) => (
            <div key={index}
                 className={"w-55 h-20 shrink-0 cursor-pointer dark:bg-[#09090B]/45 bg-gray-200/45 flex flex-row items-center " +
                     "justify-start p-3 rounded-3xl gap-3 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black " +
                     "hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300"}>
                <img src={lang.imagePath} alt={lang.name}
                     className={"w-16 h-16 border bg-white dark:bg-black border-white/30 dark:border-dark/30 rounded-2xl object-contain"}/>
                <p className={"mt-2 text-center text-black dark:text-gray-200 text-lg font-medium jetbrains-mono"}>{lang.name}</p>
            </div>
        ))
    )
}

function MarqueeTrack({ items, reverse = false, duration }: MarqueeTrackProps) {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const [scrollDistance, setScrollDistance] = useState("0px")

    useEffect(() => {
        const updateDistance = () => {
            const track = trackRef.current
            if (!track) return

            const firstSet = track.querySelector(".carousel-set") as HTMLElement | null
            if (!firstSet) return

            const styles = window.getComputedStyle(track)
            const gapValue = Number.parseFloat(styles.gap || styles.columnGap || "0")
            const gap = Number.isFinite(gapValue) ? gapValue : 0
            setScrollDistance(`${firstSet.scrollWidth + gap}px`)
        }

        updateDistance()

        const observer = new ResizeObserver(updateDistance)
        if (trackRef.current) observer.observe(trackRef.current)

        window.addEventListener("resize", updateDistance)

        return () => {
            observer.disconnect()
            window.removeEventListener("resize", updateDistance)
        }
    }, [items])

    return (
        <div className={"carousel-marquee" + (reverse ? " carousel-marquee--reverse" : "")}>
            <div
                ref={trackRef}
                className={"carousel-track"}
                style={{
                    animationDuration: duration,
                    ["--scroll-distance" as any]: scrollDistance,
                }}
            >
                {[0, 1, 2, 3].map((index) => (
                    <div key={`${index}-${reverse ? "reverse" : "normal"}`} className={"carousel-set"} aria-hidden={index !== 0}>
                        {carouselElements(items)}
                    </div>
                ))}
            </div>
        </div>
    )
}

export function ScrollingCarousel() {
    const programmingLanguages: CarouselElement[] = [
        {
            name: "Golang",
            imagePath: "https://grafikart.fr/uploads/icons/golang.svg"
        },
        {
            name: "Flutter",
            imagePath: "https://avatars.githubusercontent.com/u/14101776?s=280&v=4"
        },
        {
            name: "Java",
            imagePath: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
        },
        {
            name: "TypeScript",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
        },
        {
            name: "C++",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
        },
        {
            name: "Python",
            imagePath: "https://ent2d.ac-bordeaux.fr/disciplines/mathematiques/wp-content/uploads/sites/3/2017/02/python-logo.jpg"
        },
        {
            name: "SQL",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/1920px-Sql_data_base_with_logo.svg.png?utm_source=fr.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        },
        {
            name: "React",
            imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/langfr-1280px-React_Logo_SVG.svg.png?utm_source=fr.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        }
    ]
    const misellaneousTools: CarouselElement[] = [
        {
            name: "Docker",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-fbtr9OhyGrIqc1O4x2RZmYKQK5jtwsR5OS6WVx-og&s=10"
        },
        {
            name: "Linux",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1El38iW3yk3YIvYakO7ZJMcPc_4l_OTLyQBDflIpzJg&s=10"
        },
        {
            name: "S3",
            imagePath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTEV3vMucx46LGfBAQmzrypzoVgKP_3qlx8nRMFgf-mg&s=10"
        },
        {
            name:"Suite JetBrains",
            imagePath:"https://avatars.githubusercontent.com/u/878437?s=200&v=4"
        }
    ]

    return (
        <div className={"w-full flex flex-col items-center justify-center gap-4 py-4 overflow-hidden"}>
            <MarqueeTrack items={programmingLanguages} duration={"18s"}/>
            <div className={"w-full flex flex-row"}>
                <div className={"h-px w-full bg-linear-to-r from-transparent from-25% to-gray-200/50"}></div>
                <div className={"h-px w-full bg-linear-to-l from-transparent from-25% to-gray-200/50"}></div>
            </div>
            <MarqueeTrack items={misellaneousTools} duration={"12s"} reverse/>
        </div>
    )
}