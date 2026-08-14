import {useTheme} from "../hooks/useTheme.ts";
import {Moon, Sun} from "lucide-react";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();


    return (
        <button className={"cursor-pointer"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ?
                <Sun size={30} strokeWidth={1.5}
                     className={"hover:rotate-150 hover:scale-105 transition-transform duration-400"}/> :
                <Moon size={30} strokeWidth={1.5}
                      className={"hover:-rotate-360 hover:scale-105 transition-transform duration-400"}/>
            }
        </button>
    )
}