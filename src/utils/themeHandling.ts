import {createContext} from "react";

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {
    }
})

function isValidTheme(value: string | null): value is Theme {
    return value === "light" || value === "dark";
}

export function getInitialTheme(): Theme {
    const savedTheme = localStorage.getItem("theme");
    if (isValidTheme(savedTheme)) {
        return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
}