import React from "react";
import {StepComponent} from "../StepComponenent.tsx";

export function AboutSection() {
    const carreerPath = [
        <StepComponent
            title={"Développeur Full-Stack (Stagaire)"}
            company={"QGS Solutions"}
            city={"Toulouse"}
            country={"France"}
            beginningDate={new Date(2026, 1)}
            endingDate={new Date(2026, 5)}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent\n" +
                "                    malesuada, metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor.\n" +
                "                    Integer faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.\n" +
                "                    Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit amet\n" +
                "                    accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi eu\n" +
                "                    ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus a dui\n" +
                "                    quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus iaculis diam sit\n" +
                "                    amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper. Aliquam fringilla vel\n" +
                "                    eros ac mattis. Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna.\n" +
                "                    Nunc vel nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.\n" +
                "                    Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus tortor\n" +
                "                    eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit faucibus sapien\n" +
                "                    accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis. Etiam euismod, leo elementum\n" +
                "                    efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor. Vestibulum ante ipsum primis\n" +
                "                    in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sit amet lectus at ex imperdiet\n" +
                "                    pellentesque. Integer sed porta ex, id fringilla metus. Donec luctus posuere tempus. Ut pellentesque\n" +
                "                    euismod arcu, elementum tempus arcu sodales sed. Donec quis bibendum massa. Aenean id nisi leo.\n" +
                "                    Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec dolor non aliquet. Suspendisse vel\n" +
                "                    tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non dictum eget,\n" +
                "                    sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec turpis urna, convallis\n" +
                "                    sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec, pharetra pellentesque\n" +
                "                    ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id lacinia. Vestibulum pellentesque\n" +
                "                    venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis consequat. Proin a nunc vitae nibh\n" +
                "                    tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare rutrum. Vestibulum ut massa\n" +
                "                    nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit amet lectus. Nam ac felis ipsum.\n" +
                "                    Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex. Pellentesque ac dui nec sem placerat\n" +
                "                    pulvinar. Phasellus lacinia maximus nisl, faucibus gravida lorem lacinia eget.Lorem ipsum dolor sit\n" +
                "                    amet, consectetur adipiscing elit. Praesent malesuada, metus at venenatis vehicula, enim orci cursus\n" +
                "                    orci, sed pharetra nisi eros eget tortor. Integer faucibus facilisis purus vel faucibus. Vivamus ac arcu\n" +
                "                    eu risus tincidunt vehicula eu id lorem. Morbi quis erat sodales, blandit libero eget, lacinia ligula.\n" +
                "                    Nunc sit amet mollis mauris, sit amet accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo\n" +
                "                    nec diam rutrum maximus. Morbi eu ligula faucibus turpis ornare mollis. Praesent elementum a felis vel\n" +
                "                    hendrerit. Praesent rhoncus a dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis\n" +
                "                    vitae. Vivamus iaculis diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis\n" +
                "                    ullamcorper. Aliquam fringilla vel eros ac mattis. Nulla facilisi. In nibh mauris, pellentesque id\n" +
                "                    finibus vehicula, euismod vitae magna. Nunc vel nulla sapien. In hendrerit lacinia mauris sit amet\n" +
                "                    ornare. Nunc faucibus auctor est id gravida. Aenean suscipit, dolor nec tempor fermentum, nisi purus\n" +
                "                    rutrum massa, aliquet venenatis tellus tortor eget nibh. Maecenas convallis suscipit leo id finibus.\n" +
                "                    Quisque semper mi est, suscipit faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia\n" +
                "                    fermentum lobortis. Etiam euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod\n" +
                "                    mi magna sed dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia\n" +
                "                    curae; Suspendisse sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla\n" +
                "                    metus. Donec luctus posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed.\n" +
                "                    Donec quis bibendum massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam\n" +
                "                    placerat nec dolor non aliquet. Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean\n" +
                "                    ex sapien, interdum non dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex\n" +
                "                    pharetra eu."}
        showExpandBtn={true}/>
    ]
    const educationPath = [
        <StepComponent title={"Baccalauréat Général"} company={"Lycée Ozenne"} city={"Toulouse"} country={"France"}
                       beginningDate={new Date(2021, 9)} endingDate={new Date(2024, 7)} description={
            "Acquisition de fortes bases en Python et des bases en développement web (HTML, CSS, JS), grace au développement de plusieurs projets en groupe"
        }/>,
        <StepComponent title={"Bachelor Informatique (Spé. Informatique)"} company={"Ynov"} city={"Toulouse"}
                       country={"France"} beginningDate={new Date(2024, 9)} description={
            "Acquisition de bases solides en Golang, Java, Python, C++, Flutter, Web avec l'apprentissage de nouvelles notions via de nombreux projets, majoritairement en groupe :\n" +
            "Application mobile de recettes de cuisine en Flutter avec API en JS (express.js) et base de données en MySQL\n" +
            "Forum en Golang, HTML, CSS et JS (MVC) avec base de données en SQL\n" +
            "Application Kanban web en C#/.NET (API), SignalR (mises à jour temps réel), PostgreSQL, frontend séparé en TS + React\n" +
            "Application d'agence immobilière en Java (+ SpringBoot), base de données PostgreSQL et front-end en JS + React (+ stockage S3 compatible)"}/>
    ]

    return (
        <div className={"w-full min-h-full flex flex-col items-center justify-start xl:px-80 py-20 gap-20"}>
            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-6xl font-black mb-4 font-[Anybody] text-center"}>Experiences Professionnelle</h2>
                {carreerPath.map((val, index) =>
                    <React.Fragment key={`carrer-${index}`}>
                        {index == 0 &&
                            <div className={"h-30 w-1 bg-linear-to-b from-transparent from-25% to-gray-200/50"}></div>
                        }
                        {val}
                        {
                            index == carreerPath.length - 1 ?
                                <div
                                    className={"h-15 w-1 bg-linear-to-b from-gray-200/50 from-75% to-transparent"}></div> :
                                <div className={"h-20 w-1 bg-gray-200/50"}></div>
                        }
                    </React.Fragment>
                )}
            </div>

            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-6xl font-black mb-4 font-[Anybody]"}>Formations</h2>
                {educationPath.map((val, index) =>
                    <React.Fragment key={`education-${index}`}>
                        {index == 0 &&
                            <div className={"h-30 w-1 bg-linear-to-b from-transparent from-25% to-gray-200"}></div>
                        }
                        {val}
                        {
                            index == educationPath.length - 1 ?
                                <div
                                    className={"h-15 w-1 bg-linear-to-b from-gray-200 from-75% to-transparent"}></div> :
                                <div className={"h-20 w-1 bg-gray-200/50"}></div>
                        }
                    </React.Fragment>
                )}
            </div>

        </div>
    )
}