import {useEffect, useRef, useState} from "react";
import {Languages, Check} from "lucide-react";
import {useTranslation} from "react-i18next";

export type LanguageCode = "fr" | "en";

interface LanguageOption {
    code: LanguageCode;
    label: string;
    flag: string;
}

const languages: LanguageOption[] = [
    {code: "fr", label: "Français", flag: "FR"},
    {code: "en", label: "English", flag: "GB"},
];

interface LanguageDropdownProps {
    className?: string;
    currentLanguage?: LanguageCode;
    onLanguageChange?: (lang: LanguageCode) => void;
}

export function LanguageDropdown({
    className = "",
    currentLanguage,
    onLanguageChange,
}: LanguageDropdownProps) {
    const {i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const activeLanguage: LanguageCode =
        currentLanguage ?? (i18n.language?.startsWith("en") ? "en" : "fr");

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleSelect = (lang: LanguageCode) => {
        i18n.changeLanguage(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
        }
        if (onLanguageChange) {
            onLanguageChange(lang);
        }
        setIsOpen(false);
    };

    return (
        <div ref={dropdownRef} className={`relative ${className}`}>
            <button
                type="button"
                className={`p-3 rounded-3xl transition-all duration-300 hover:shadow-(--inset-top-bar-button-shadow) active:scale-95 cursor-pointer flex items-center justify-center text-black dark:text-gray-200 ${
                    isOpen ? "shadow-(--inset-top-bar-button-shadow)" : ""
                }`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Sélectionner la langue"
                aria-expanded={isOpen}
                aria-haspopup="menu"
            >
                <Languages
                    size={30}
                    strokeWidth={1.5}
                    className="hover:scale-105 transition-transform duration-300"
                />
            </button>

            {isOpen && (
                <div
                    role="menu"
                    className="absolute right-0 top-full mt-3 min-w-44 bg-gray-50/85 dark:bg-[#2a2b2b]/85 backdrop-blur-2xl rounded-3xl p-2 drop-shadow-xl drop-shadow-black/30 border border-white/30 dark:border-white/10 z-50 flex flex-col gap-1.5 animate-in fade-in duration-200"
                >
                    {languages.map((lang) => {
                        const isSelected = activeLanguage === lang.code;
                        return (
                            <button
                                key={lang.code}
                                role="menuitem"
                                type="button"
                                onClick={() => handleSelect(lang.code)}
                                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl text-black dark:text-gray-200 font-[Anybody] text-base md:text-lg transition-all duration-300 cursor-pointer ${
                                    isSelected
                                        ? "shadow-(--inset-top-bar-button-shadow) font-medium"
                                        : "shadow-[inset_0_0_0_transparent] font-light hover:shadow-(--inset-top-bar-button-shadow)"
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <span className="text-lg leading-none">{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </span>
                                {isSelected && (
                                    <Check size={18} strokeWidth={2.5} className="opacity-80 shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
