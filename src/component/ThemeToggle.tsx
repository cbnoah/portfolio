import {useTheme} from "../hooks/useTheme.ts";
import {MorphIcon} from "morphicons/react";
import {Moon, Sun} from "lucide";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <button
            className={"p-3 rounded-3xl transition-all duration-300 hover:shadow-(--inset-top-bar-button-shadow) active:scale-95 cursor-pointer flex items-center justify-center text-black dark:text-gray-200"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme">
            <MorphIcon
                className={"hover:rotate-360 hover:scale-105 transition-transform duration-400"}
                strokeWidth={1.25}
                spring={"snappy"}
                size={30}
                icon={theme === "dark" ? Sun : Moon}
            />
        </button>
    );
}