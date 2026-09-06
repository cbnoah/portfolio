import { useEffect, useRef, useState } from "react";
import "../index.css"

import cppIcon from "../assets/icons/otherIcons/cpp.webp"
import dockerIcon from "../assets/icons/otherIcons/docker.png"
import flutterIcon from "../assets/icons/otherIcons/flutter.png"
import golangIcon from "../assets/icons/otherIcons/golang.webp"
import javaIcon from "../assets/icons/otherIcons/java.svg"
import pythonIcon from "../assets/icons/otherIcons/python.webp"
import reactIcon from "../assets/icons/otherIcons/react.webp"
import sqlIcon from "../assets/icons/otherIcons/sql.webp"
import typescriptIcon from "../assets/icons/otherIcons/typescript.svg"
import jetbrainsIcon from "../assets/icons/otherIcons/jetbrains.png"
import s3Icon from "../assets/icons/otherIcons/s3.svg"
import linuxIcon from "../assets/icons/otherIcons/linux.webp"
import {useTranslation} from "react-i18next";

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
                <img src={lang.imagePath} alt={lang.name} loading="lazy"
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
    const {t} = useTranslation();

    const programmingLanguages: CarouselElement[] = [
        {
            name: "Golang",
            imagePath: golangIcon
        },
        {
            name: "Flutter",
            imagePath: flutterIcon
        },
        {
            name: "Java",
            imagePath: javaIcon
        },
        {
            name: "TypeScript",
            imagePath: typescriptIcon
        },
        {
            name: "C++",
            imagePath: cppIcon
        },
        {
            name: "Python",
            imagePath: pythonIcon
        },
        {
            name: "SQL",
            imagePath: sqlIcon
        },
        {
            name: "React",
            imagePath: reactIcon
        }
    ]
    const misellaneousTools: CarouselElement[] = [
        {
            name: "Docker",
            imagePath: dockerIcon
        },
        {
            name: "Linux",
            imagePath: linuxIcon
        },
        {
            name: "S3",
            imagePath: s3Icon
        },
        {
            name: t("jetbrains"),
            imagePath: jetbrainsIcon
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