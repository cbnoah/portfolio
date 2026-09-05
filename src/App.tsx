// @ts-ignore
import {Color4Bg} from '@color4bg/react';
import {Overlay} from "./component/Overlay.tsx";
import {ComicButton} from "./component/ComicButton.tsx";
import {useEffect, useState} from "react";
import {AboutSection} from "./component/sections/AboutSection.tsx";
import {ContactSection} from "./component/sections/ContactSection.tsx";
import {ThemeProvider} from "./component/ThemeProvider.tsx";
import {Background} from "./component/Background.tsx";
import {ProjectSection} from "./component/sections/ProjectSection.tsx";
import {Footer} from "./component/Footer.tsx";


function App() {
    const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        if (!scrollEl) return;
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {root: scrollEl, threshold: 0.2}
        );

        ["home", "about", "projects", "contact"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
                e.preventDefault();
                const targetId = this.getAttribute('href')?.substring(1);
                if (!targetId || !scrollEl) return;

                const targetElement = document.getElementById(targetId);
                if (!targetElement) return;

                setActiveSection(targetId);

                const elementRect = targetElement.getBoundingClientRect();
                const containerRect = scrollEl.getBoundingClientRect();
                const relativeTop = scrollEl.scrollTop + (elementRect.top - containerRect.top);

                scrollEl.scrollTo({
                    top: Math.max(0, relativeTop),
                    behavior: 'smooth'
                });
            });
        });

        return () => observer.disconnect();
    }, [scrollEl]);


    return <ThemeProvider>
        <Overlay ref={setScrollEl}>
            <div className="relative h-screen">
                <div
                    className={`fixed inset-0 z-1 w-screen h-screen pointer-events-none backdrop-blur-2xl transition-opacity duration-500 ${activeSection == "home" ? "opacity-0" : "opacity-100"}`}></div>
                <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none">
                    <Background/>
                </div>
                <div className={"flex flex-col gap-70 md:px-0"}>
                    <div
                        className="w-full h-screen z-10 relative cursor-default select-none px-5 pt-5 pb-20 xl:p-10 flex flex-col justify-end items-start gap-4"
                        id={"home"}>
                        <div className={"flex flex-row"}>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-9xl xl:text-9xl hover:font-black transition-all">N</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-9xl xl:text-9xl hover:font-black transition-all">o</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-9xl xl:text-9xl hover:font-black transition-all">a</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-9xl xl:text-9xl hover:font-black transition-all">h</h1>
                        </div>
                        {/*name for big screens*/}
                        <div className="2xl:flex-row flex-col justify-start items-center 2xl:flex">
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-8xl xl:text-[6.3rem] hover:font-black transition-all duration-300">CHARRIN</h1>
                            <div className={"flex flex-row"}>
                                <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-6xl md:text-9xl xl:text-9xl hover:font-black transition-all">-</h1>
                                <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-6xl md:text-9xl xl:text-9xl hover:font-black transition-all">-</h1>
                            </div>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-5xl sm:text-7xl md:text-8xl xl:text-[6.3rem] hover:font-black transition-all duration-300">BOURRAT</h1>
                        </div>
                        <div
                            className={"w-full h-50 2xl:h-30 flex 2xl:flex-row flex-col 2xl:justify-between 2xl:items-center items-start gap-4"}>
                            <h2 className="text-black dark:text-gray-100 font-[DINdong] font-black text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] pt-5 xl:pt-0">Etudiant en
                                informatique</h2>
                            <div className={"xl:w-auto w-full flex flex-row xl:justify-center items-center gap-5"}>
                                <ComicButton text="CV"
                                             link="https://drive.google.com/file/d/1rTfKRrt-SmrfGUq-6-Bnib_ynqFG4z5g/view?usp=sharing"/>
                                <ComicButton text="GitHub" link="https://github.cbnoah.com"/>
                            </div>
                        </div>
                    </div>
                    <section id={"about"}
                             className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection != "home" ? "opacity-100" : "opacity-0"}`}>
                        <AboutSection/>
                    </section>
                    <section id={"projects"}
                             className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection != "home" ? "opacity-100" : "opacity-0"}`}>
                        <ProjectSection/>
                    </section>
                    <section id={"contact"}
                             className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection != "home" ? "opacity-100" : "opacity-0"}`}>
                        <ContactSection/>
                    </section>
                </div>
                <Footer />
            </div>
        </Overlay>
    </ThemeProvider>
}

export default App;
