import {useContext} from "react";
import {ThemeContext} from "../utils/themeHandling.ts";

export function useTheme() {
    return useContext(ThemeContext);
}