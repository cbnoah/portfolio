// @ts-ignore
import {Color4Bg} from '@color4bg/react';
import {Scrollbar} from "./component/Scrollbar.tsx";
import {ComicButton} from "./component/ComicButton.tsx";
import {useEffect, useState} from "react";
import {AboutSection} from "./component/sections/AboutSection.tsx";
import {ContactSection} from "./component/sections/ContactSection.tsx";
import {ThemeProvider} from "./component/ThemeProvider.tsx";
import {Background} from "./component/Background.tsx";
import {ProjectSection} from "./component/sections/ProjectSection.tsx";


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
            anchor.addEventListener('click', function (e) {
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
        <Scrollbar ref={setScrollEl}>
            <div className="relative h-screen">
                <div
                    className={`fixed inset-0 z-1 w-screen h-screen pointer-events-none backdrop-blur-2xl transition-opacity duration-500 ${activeSection == "home" ? "opacity-0" : "opacity-100"}`}></div>
                <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none">
                    <Background/>
                </div>
                <div className={"flex flex-col gap-70"}>
                    <div
                        className="w-full h-screen z-10 relative cursor-default select-none p-5 xl:p-10 flex flex-col justify-end items-start gap-4"
                        id={"home"}>
                        <div className={"flex flex-row"}>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-7xl md:text-8xl xl:text-9xl hover:font-black transition-all">N</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-7xl md:text-8xl xl:text-9xl hover:font-black transition-all">o</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-7xl md:text-8xl xl:text-9xl hover:font-black transition-all">a</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-7xl md:text-8xl xl:text-9xl hover:font-black transition-all">h</h1>
                        </div>
                        {/*name for big screens*/}
                        <div className="hidden flex-row justify-start items-center 2xl:flex">
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-[6.3rem] hover:font-black transition-all duration-300">CHARRIN</h1>
                            <div className={"flex flex-row"}>
                                <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-8xl">-</h1>
                                <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-8xl">-</h1>
                            </div>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-[6.3rem] hover:font-black transition-all duration-300">BOURRAT</h1>
                        </div>
                        {/*name for smaller screens*/}
                        <div className="flex flex-col justify-center items-start 2xl:hidden">
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-6xl md:text-8xl xl:text-[6.5rem] hover:font-black transition-all duration-300">CHARRIN--</h1>
                            <h1 className="text-black dark:text-gray-100 font-[Panchang-Variable] font-semibold text-6xl md:text-8xl xl:text-[6.5rem] hover:font-black transition-all duration-300">BOURRAT</h1>
                        </div>
                        <div
                            className={"w-full h-50 2xl:h-30 flex 2xl:flex-row flex-col 2xl:justify-between 2xl:items-center items-start gap-4"}>
                            <h2 className="text-black dark:text-gray-100 font-[DINdong] font-black text-6xl xl:text-[4rem]">Etudiant en
                                informatique</h2>
                            <div className={"xl:w-auto w-full flex flex-row xl:justify-center items-center gap-5"}>
                                <ComicButton text="CV"
                                             link="https://drive.google.com/file/d/1G76TPsTcdBMbECQ9myqVTopUqWO0IgC-/view?usp=sharing"/>
                                <ComicButton text="GitHub" link="https://github.com/cbnoah"/>
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
                    <footer className={"bg-gray-800 text-white py-6"}>
                        <p className="text-center text-sm text-gray-500">&copy; 2023 My Portfolio. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </Scrollbar>
    </ThemeProvider>
}

export default App;