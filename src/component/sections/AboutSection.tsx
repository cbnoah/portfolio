import React from "react";
import {StepComponent} from "../StepComponent.tsx";
import {ScrollingCarousel} from "../ScrollingCarousel.tsx";
import {Trans, useTranslation} from "react-i18next";

export function AboutSection() {
    const {t} = useTranslation();

    const carreerPath = [
        <StepComponent
            title={t("qgsTitle")}
            company={"QGS Solutions"}
            city={"Toulouse"}
            country={"France"}
            beginningDate={new Date(2026, 1)}
            endingDate={new Date(2026, 5)}
            description={t("qgsDescription")}
            showExpandBtn={true}/>
    ]
    const educationPath = [
        <StepComponent title={t("ynovTitle")} company={"Ynov"} city={"Toulouse"}
                       country={"France"} beginningDate={new Date(2024, 9)} description={t("ynovDescription")}/>,
        <StepComponent title={t("bacTitle")} company={"Lycée Ozenne"} city={"Toulouse"} country={"France"}
                       beginningDate={new Date(2021, 9)} endingDate={new Date(2024, 7)} description={t("bacDescription")}/>
    ]

    return (
        <div className={"w-full min-h-full flex flex-col items-center justify-start xl:px-80 py-20 gap-20"}>
            <div className={"flex flex-col items-center justify-start"}>
                <h2 className={"text-5xl md:text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>{t("about")}</h2>
                <p className={"w-[93%] md:w-[95%] xl:w-full dark:bg-[#09090B]/45 bg-gray-200/45 text-md sm:text-lg text-center text-black dark:text-gray-300 rounded-3xl items-center justify-start py-6 px-8 sm:py-10 sm:px-15 gap-8 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300"}>
                    <Trans i18nKey={"aboutText"}>
                        Bonjour et bienvenue sur mon portfolio ! Je m’appelle Noah CHARRIN-BOURRAT et je suis en 3ème
                        année de bachelor en développement informatique à Toulouse Ynov Campus. Au cours de ma première
                        et
                        deuxième
                        année, j’ai découvert un vif intérêt pour le développement de logiciels et d’applications
                        mobiles,
                        mais ma curiosité
                        et ma passion pour l’informatique me poussent à explorer de nombreux domaines différents. J’aime
                        réaliser des projets très variés, allant des jeux vidéo et des API aux applications web
                        complètes.
                        Je suis toujours impatient d’apprendre de nouvelles technologies, de relever des défis
                        techniques et
                        de transformer des idées en produits concrets et fonctionnels. Si mon profil vous intéresse,
                        n’hésitez pas à me contacter via le formulaire de contact ou via les informations données à la
                        section
                        <a href={"#contact"}
                           className={"text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"}> contact </a> de
                        ce portfolio.</Trans>
                </p>
            </div>
            <div className={"w-full overflow-hidden"}>
                <h3 className={"text-3xl md:text-4xl font-bold mb-4 font-[Anybody] text-center text-black dark:text-white"}>
                    {t("technos")}
                </h3>
                <div className={"relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"}>
                    <ScrollingCarousel/>
                </div>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-4xl md:text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>
                    {t("career")}
                </h2>
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

            <div className={"flex flex-col items-center justify-center px-5 xl:px-0"}>
                <h2 className={"text-4xl md:text-6xl font-black mb-4 font-[Anybody] text-black dark:text-white"}>
                    {t("educationTitle")}
                </h2>
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