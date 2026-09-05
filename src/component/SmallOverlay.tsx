import React, {useEffect, useRef} from "react";
import {MorphIcon} from "morphicons/react";
import {Menu, X} from "lucide";
import {ThemeToggle} from "./ThemeToggle.tsx";

type SmallOverlayProps = {
    activeSection?: string;
};

export function SmallOverlay({activeSection}: SmallOverlayProps) {
    const [open, setOpen] = React.useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        {id: "home", href: "#home", label: "Accueil"},
        {id: "about", href: "#about", label: "A Propos"},
        {id: "projects", href: "#projects", label: "Projets"},
        {id: "contact", href: "#contact", label: "Contact"},
    ];

    return (
        <div
            ref={menuRef}
            className={`absolute ${open ? "max-h-120 pb-6" : "max-h-18 pb-3"} overflow-hidden w-full bg-gray-50/40 dark:bg-[#2a2b2b]/40 z-100 transition-all duration-400 ease-in-out flex flex-col sm:hidden rounded-b-3xl top-0 right-0 py-2 px-4 backdrop-blur-xl drop-shadow-black/30 border-b border-white/20 dark:border-white/10`}>
            <div className="flex flex-row h-full w-full justify-between items-center px-2 shrink-0 gap-4">
                <button
                    className={`w-full flex flex-row items-center justify-between gap-4 py-2.5 px-5 rounded-3xl transition-all duration-300 text-black dark:text-gray-200 cursor-pointer ${
                        open
                            ? "shadow-(--inset-top-bar-button-shadow) font-medium"
                            : "shadow-[inset_0_0_0_transparent] font-light hover:shadow-(--inset-top-bar-button-shadow)"
                    }`}
                    onClick={() => setOpen(!open)}>
                    <span className="text-xl font-[Anybody]">Menu</span>
                    <MorphIcon className={"text-black dark:text-gray-200"} size={24} icon={open ? X : Menu}/>
                </button>
                <div className={"self-stretch my-2 flex flex-col"}>
                    <div className={"h-full w-px bg-linear-to-b from-transparent from-5% to-black/50 dark:to-gray-200/50"}></div>
                    <div className={"h-full w-px bg-linear-to-t from-transparent from-5% to-black/50 dark:to-gray-200/50"}></div>
                </div>
                <div className="flex flex-row items-center pr-2">
                    <ThemeToggle/>
                </div>
            </div>
            <div className={`flex flex-col w-full justify-start items-center gap-4 mt-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className={"w-full h-px bg-gray-400/30 dark:bg-gray-600/50"}></div>
                {/*Redirect to the sections*/}
                <div className={"flex flex-col w-full gap-3 px-2"}>
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`w-full flex items-center justify-center text-black dark:text-gray-200 text-xl font-[Anybody] py-3 px-5 rounded-3xl transition-all duration-300 text-center ${
                                    isActive
                                        ? "shadow-(--inset-top-bar-button-shadow) font-medium"
                                        : "shadow-[inset_0_0_0_transparent] font-light hover:shadow-(--inset-top-bar-button-shadow) hover:font-medium"
                                }`}>
                                {link.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}