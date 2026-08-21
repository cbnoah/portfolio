import React from "react";
import {StepComponent} from "../StepComponent.tsx";
import {ScrollingCarousel} from "../ScrollingCarousel.tsx";

export function AboutSection() {
    const carreerPath = [
        <StepComponent
            title={"Développeur Full-Stack (Stagaire)"}
            company={"QGS Solutions"}
            city={"Toulouse"}
            country={"France"}
            beginningDate={new Date(2026, 1)}
            endingDate={new Date(2026, 5)}
            description={`
# L'entreprise et son marché:
*Nom et localisation :* QGS Solutions (basée à Narbonne).

*Secteur et positionnement :* Fondée en 2024, QGS Solutions est une entreprise qui accompagne les TPE, PME et indépendants dans la gestion de leur informatique et la sécurisation de leurs données. Elle se positionne sur le marché concurrentiel du service informatique et des prestations de proximité.

*Cadre du stage :* Mon expérience en tant que stagiaire en développement full stack s'est déroulée en format alterné (travail pour l'entreprise les après-midis) de janvier à mai 2026, soit une durée totale de 5 mois.

# Rôle et activités
La tâche principale qui m'a été confiée était de concevoir, reproduire et moderniser un SaaS à destination des viticulteurs pour la gestion de leurs stocks et de leurs ventes : VinoDomia. 
L'ancien logiciel possédait une interface vieillissante et présentait des limites de maintenance importantes, reposant sur des outils de développement obsolètes. 
L'enjeu stratégique était de recoder entièrement le logiciel sous la forme d'une web app en utilisant des technologies modernes, afin d'offrir un accès simplifié depuis n'importe quel appareil connecté au réseau 
et de supprimer la nécessité d'installer un programme lourd sur les machines des utilisateurs. Mes activités ont principalement porté sur la modélisation des interfaces, 
l'architecture frontend et le début de l'implémentation backend.

# Outils techniques et méthodes

Pour la partie frontend, j'ai utilisé TypeScript combiné à Nuxt (un framework basé sur l'écosystème Vue.js), avec l'ajout de TailwindCSS pour faciliter la modélisation des interfaces. 
Pour le backend, la structuration du schéma de la base de données et sa manipulation ont été réalisées via l'ORM Prisma.

Lors du développement, des méthodess de développement agile (itérations courtes, revues de code régulières et validation progressive des fonctionnalités) ont été utilisés.

# Organisation du travail en équipe, responsabilités et collaborations
Placé sous la responsabilité de mes maîtres de stage, j'ai évolué au sein d'une équipe à taille humaine.

Pour le développement, j'ai majoritairement collaboré avec une autre stagiaire présente en même temps que moi, ce qui nous a demandé de synchroniser nos tâches sur le code.
Les retours et validations de code se faisaient de manière hybride. Nous utilisions des outils de messagerie instantanée (Teams et Discord) pour les points rapides du quotidien, 
complétés par des points en face-à-face avec notre mentor pour valider nos réalisations avant de passer aux étapes suivantes.

# Curiosité, créativité & autonomie
Bien que j'ai pu réaliser plusieurs projets full-stack au cours de mes deux premières années de bachelor informatique à Ynov, cette immersion m'a poussé à faire preuve d'autonomie et de créativité, du au fait notamment de devoir s'approprier en un 
temps relativement court un nouveau framework (Nuxt/TypeScript) que je n'avais pas encore exploré en profondeur en cours, en effectuant des recherches personnelles et de la veille technique.
Face à la conception des pages de l'application VinoDomia, j'ai su prendre des initiatives sur l'ergonomie des interfaces pour proposer un design plus moderne et intuitif aux viticulteurs, tout en respectant les contraintes du cahier des charges.

# Bilan personnel
## Ressenti de l'apprenant sur l'expérience acquise :
Ce stage a été extrêmement enrichissant. Il m'a permis d'approfondir concrètement mes connaissances en développement full-stack au sein d'un environnement professionnel réel, 
confirmant l'intérêt que je porte à la conception de logiciels robustes.

## Progression professionnelle à l'issue du stage :
Au-delà de la montée en compétences techniques, cette expérience m'a permis de mûrir dans ma posture professionnelle. J'ai gagné en rigueur, notamment sur la propreté du code, la gestion des livrables et la communication au sein d'une équipe de développement.

## Présentation d'une difficulté (forces et faiblesses) :
La nécessité de maîtriser un nouveau framework tout en produisant immédiatement un code de qualité professionnelle, propre et maintenable, a représenté un défi complexe. Cette épreuve a néanmoins mis en avant ma capacité d'adaptation et ma persévérance. 
Elle a en revanche révélé un besoin initial d'encadrement plus rapproché lors de la prise en main d'outils inconnus, une faiblesse que j'ai su compenser grâce à mon autonomie de recherche et aux retours de mes maîtres de stage.

# Impact du stage sur le projet professionnel 
Bien que le développement web ne constitue pas nécessairement ma spécialité prioritaire pour la suite de ma carrière, ce stage a eu un impact majeur sur mon projet professionnel. 
Il m'a permis d'avoir un aperçu réaliste des méthodes de travail en milieu professionnel et de la rigueur exigée en entreprise, 
et m'a doté d'une polyvalence technique indispensable pour aborder sereinement mes futures collaborations dans le secteur informatique.
`}
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
            <div>
                <h2 className={"text-5xl md:text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>À
                    Propos</h2>
                <p className={"w-full p-10 dark:bg-[#09090B]/45 bg-gray-200/45 text-lg text-center text-black dark:text-gray-300 rounded-3xl items-center justify-start py-10 px-15 gap-8 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300"}>
                    Bonjour et bienvenue sur mon portfolio ! Je m’appelle Noah CHARRIN-BOURRAT et je vais entrer en 3ème
                    année de développement logiciel au Campus Ynov de Toulouse, en France. Au cours de ma première et deuxième
                    année, j’ai découvert un vif intérêt pour le développement de logiciels et d’applications mobiles, mais ma curiosité
                    et ma passion pour l’informatique me poussent à explorer de nombreux domaines différents. J’aime
                    réaliser des projets très variés, allant des jeux vidéo et des API aux applications web complètes.
                    Je suis toujours impatient d’apprendre de nouvelles technologies, de relever des défis techniques et
                    de transformer des idées en produits concrets et fonctionnels. Si mon profil vous intéresse,
                    n’hésitez pas à me contacter via le formulaire de contact ou via les informations données à la section
                    <a href={"#contact"} className={"text-blue-500 hover:text-blue-700"}> contact </a> de ce portfolio.
                </p>
            </div>
            <div className={"w-full overflow-hidden"}>
                <h3 className={"text-3xl md:text-4xl font-bold mb-4 font-[Anybody] text-center text-black dark:text-white"}>
                    Outils, Languages et Logiciels que j'utilise</h3>
                <div className={"relative left-1/2 w-screen -translate-x-1/2 overflow-hidden"}>
                    <ScrollingCarousel/>
                </div>
            </div>
            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-5xl md:text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>Experiences
                    Professionnelle</h2>
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
                <h2 className={"text-6xl font-black mb-4 font-[Anybody] text-black dark:text-white"}>Formations</h2>
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