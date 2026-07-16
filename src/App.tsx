// @ts-ignore
import {Color4Bg} from '@color4bg/react';
import {Scrollbar} from "./component/Scrollbar.tsx";

export function App() {
    return <Scrollbar>
        <div className="relative h-screen">
            <div className="absolute inset-0 z-0 w-screen">
                <Color4Bg style={"curve-gradient"}
                          colors={["#5c5c5c", "#808080", "#b0b0b0", "#e6e6e6", "#EAEBE8", "#8f8f8f"]}
                          loop={true}
                          seed={1000}
                          options={{
                              speed: 1,
                              noise: 0.15
                          }}/>
            </div>
            <div
                className="w-full h-full z-10 relative cursor-default select-none p-10 flex flex-col justify-end items-start">
                <h1 className="font-[Panchang-Variable] font-semibold text-9xl hover:font-black transition-all">Noah</h1>
                <div className="flex flex-row justify-start items-center">
                    <h1 className="font-[Panchang-Variable] font-semibold text-[7rem] hover:font-black transition-all">CHARRIN</h1>
                    <div className={"flex flex-row"}>
                        <h1 className="font-[Panchang-Variable] font-semibold text-8xl">-</h1>
                        <h1 className="font-[Panchang-Variable] font-semibold text-8xl">-</h1></div>
                    <h1 className="font-[Panchang-Variable] font-semibold text-[7rem] hover:font-black transition-all">BOURRAT</h1>
                </div>
                <div className={"w-full h-30 flex flex-row justify-between items-center"}>
                    <h2 className="font-[DINdong] font-black text-[4rem]">Etudiant en informatique</h2>
                    <div className={"flex flex-row justify-center items-center gap-5"}>
                        <a href={"https://drive.google.com/file/d/1G76TPsTcdBMbECQ9myqVTopUqWO0IgC-/view?usp=sharing"} target={"_blank"} className={"px-[1.3rem] rounded-md bg-white border-3 border-black font-[Panchang-Variable] cursor-pointer text-[3rem] shadow-black shadow-[0.3rem_0.3rem] " +
                            "hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[0.63rem_0.63rem] transition-all"}>CV
                        </a>
                        <a href={"https://github.com/cbnoah"} target={"_blank"}
                            className={"px-[1.3rem] rounded-md bg-white border-3 border-black font-[Panchang-Variable] cursor-pointer text-[3rem] shadow-black shadow-[0.3rem_0.3rem] " +
                                "hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[0.63rem_0.63rem] transition-all"}>GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Scrollbar>
}