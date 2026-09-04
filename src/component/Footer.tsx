import React from "react";
import {Mail, ArrowUp} from "lucide-react";

function GithubIcon({size = 20, className = ""}: {size?: number; className?: string}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon({size = 20, className = ""}: {size?: number; className?: string}) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

type SocialLink = {
    title: string;
    path: string;
    icon: React.ComponentType<{size?: number; className?: string}>;
    color?: string;
};

export function Footer() {
    const socialLinks: SocialLink[] = [
        {
            title: "GitHub",
            path: "https://github.com/cbnoah",
            icon: GithubIcon,
        },
        {
            title: "LinkedIn",
            path: "https://www.linkedin.com/in/noah-charrin-bourrat-9b3669332/",
            icon: LinkedinIcon,
        },
        {
            title: "Email",
            path: "mailto:contact@cbnoah.com",
            icon: Mail,
        }
    ];

    const scrollToTop = () => {
        const container = document.getElementById("custom-scrollbars-content");
        if (container) {
            container.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="w-full flex flex-col items-center justify-center xl:px-80 px-6 pb-16 pt-10 z-10 relative">
            <div className="w-full dark:bg-[#09090B]/45 bg-gray-200/45 rounded-3xl flex flex-col gap-8 py-10 px-8 md:px-14 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300">
                {/* Header: Brand name & Back to Top button */}
                <div className="w-full flex flex-col justify-center items-center gap-4">
                    <span className={"text-2xl dark:text-white text-black"}>Vous êtes arrivés à la fin !</span>
                    <button
                        onClick={scrollToTop}
                        aria-label="Retour en haut"
                        className="flex flex-row gap-2 items-center justify-center px-5 py-2.5 jetbrains-mono font-medium text-sm bg-gray-100/60 dark:bg-[#09090B]/60 border border-white/30 dark:border-black/30 rounded-2xl hover:border-white dark:hover:border-black hover:bg-gray-100 dark:hover:bg-[#09090B]/80 hover:scale-105 transition-all duration-300 text-black dark:text-white cursor-pointer"
                    >
                        <span>Haut de page</span>
                        <ArrowUp size={16} />
                    </button>
                </div>

                {/* Social Media Links: styled like ProjectSection links */}
                <div className="w-full flex flex-col items-center gap-4">
                    <span className="text-xs md:text-sm font-semibold jetbrains-mono uppercase tracking-wider text-gray-600 dark:text-gray-400">
                        Réseaux & Liens
                    </span>
                    <div className="w-full flex flex-wrap justify-center items-center gap-4">
                        {socialLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row gap-3 px-6 py-3 items-center justify-center jetbrains-mono font-bold text-sm md:text-base bg-gray-100/60 dark:bg-[#09090B]/60 border border-white/30 dark:border-black/30 rounded-3xl hover:border-white dark:hover:border-black hover:bg-gray-100 dark:hover:bg-[#09090B]/80 hover:scale-105 transition-all duration-300 text-black dark:text-white"
                                >
                                    <IconComponent size={20} />
                                    <span>{link.title}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Row: Copyright text */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-black/10 dark:border-white/10 text-xs md:text-sm jetbrains-mono text-gray-700 dark:text-gray-300">
                    <p className="text-center sm:text-left font-medium">
                        © 2026 Noah CHARRIN--BOURRAT, Tous droits réservés.
                    </p>
                    <p className="text-center sm:text-right text-gray-700 dark:text-gray-300">
                        Portfolio v2, Conçu avec React, TypeScript & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
