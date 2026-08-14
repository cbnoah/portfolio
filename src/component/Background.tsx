import {useTheme} from "../hooks/useTheme.ts";
import {Color4Bg} from "@color4bg/react";

export function Background() {
    const {theme} = useTheme();
    return <Color4Bg style={"curve-gradient"}
                     colors={theme === "dark" ? ["#FDFDFD", "#DDDDDD", "#BBBBBB", "#555555", "#343434", "#010101"] : ["#5c5c5c", "#808080", "#b0b0b0", "#e6e6e6", "#EAEBE8", "#8f8f8f"]}
                     loop={true}
                     seed={1000}
                     options={{speed: 1, noise: 0.15}}/>;
}