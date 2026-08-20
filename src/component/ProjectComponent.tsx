import {
    Check,
    Clock, type LucideIcon,
    Maximize2,
    Minimize2,
    UserRound,
    UsersRound
} from "lucide-react";
import {useState} from "react";
import {DescriptionMarkdown} from "./DescriptionMarkdown.tsx";

export type Tag = {
    color: string,
    title: string,
    icon: LucideIcon
}

export type Link = {
    icon: LucideIcon,
    title: string,
    path: string,
}

type ProjectComponenentProps = {
    title: string,
    finished: boolean,
    projectImagePath?: string,
    group: boolean,
    tags?: Tag[],
    links?: Link[],
    description: string,
    showExpandBtn?: boolean,
}

export function ProjectComponent({
                                     title,
                                     finished,
                                     projectImagePath,
                                     group,
                                     tags,
                                     links,
                                     description,
                                     showExpandBtn
                                 }: ProjectComponenentProps) {

    const [expanded, setExpanded] = useState(false);
    let [height] = useState(showExpandBtn == true && showExpandBtn !== null ? "h-160" : "h-150");
    return (
        <div
            className={`dark:bg-[#09090B]/45 bg-gray-200/45 ${description.length > 1000 ? (expanded ? "h-full" : height) : "h-full"} w-full rounded-3xl flex flex-col items-center justify-start py-10 px-15 gap-8 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300`}>
            {/*Component header (for infos)*/}
            <div className={"w-full h-full flex flex-col gap-4"}>
                <div className={"w-full h-full flex flex-row items-start gap-6"}>
                    <div className={"w-30 h-30 border border-white/30 dark:border-dark/30 rounded-2xl"}>
                        {projectImagePath === undefined || projectImagePath === "" ?
                            <span
                                className={"w-full h-full flex text-2xl text-center justify-center items-center text-black dark:text-white"}>Aucune Image</span> :
                            <img src={projectImagePath}
                                 alt="Project Image"
                                 className={"w-full h-full rounded-2xl"}/>
                        }
                    </div>
                    <div className={"flex flex-col justify-between items-start"}>
                        <h3 className={"text-4xl font-extrabold mb-2 font-[Anybody] text-black dark:text-white"}>{title}</h3>
                        <div className={"flex flex-row gap-2 text-black dark:text-white"}>
                            {group ? <UsersRound/> : <UserRound/>}
                            <h4 className={"text-lg mb-2 jetbrains-mono text-black dark:text-white"}>{group ? "En Groupe" : "Seul"}</h4>
                        </div>
                        <div className={"flex flex-row gap-2 text-black dark:text-white"}>
                            {finished ? <Check/> : <Clock/>}
                            <h4 className={"text-lg mb-2 jetbrains-mono text-black dark:text-white"}>{finished ? "Projet Fini" : "En Cours"}</h4>
                        </div>
                    </div>
                </div>
                <div
                    className={"w-fit h-full flex flex-row items-center justify-start gap-4"}>{(tags !== null && tags !== undefined && tags.length > 0) && tags.map((tag, index) => {
                    return (
                        <div
                            className={`w-32 flex flex-row items-center justify-start gap-2 px-2 py-1 text-md font-medium jetbrains-mono text-left dark:bg-[#09090B]/50 bg-gray-100/80 rounded-xl border text-black dark:text-white`}
                            key={index}
                            style={{borderColor: tag.color}}>
                            <div className="shrink-0 flex items-center">
                                <tag.icon/>
                            </div>
                            <span className="truncate">
                                {tag.title}
                            </span>
                        </div>
                    )
                })}</div>


            </div>
            {/*Text Part*/}
            <div className={"w-full h-full"}>
                <div
                    className={`${expanded ? '' : 'line-clamp-13 xl:line-clamp-13 2xl:line-clamp-15'} markdown-content text-black dark:text-gray-200`}>
                    <DescriptionMarkdown description={description}/>
                </div>
            </div>
            <>{(showExpandBtn === true && showExpandBtn !== null) &&
                <button
                    className={"w-full flex flex-row gap-3 items-center justify-center jetbrains-mono font-bold bg-gray-100/60 " +
                        "dark:bg-[#09090B]/60 border border-white/30 py-3 rounded-3xl hover:border-white hover:bg-gray-100 hover:scale-102 " +
                        "dark:hover:bg-[#09090B] transition-all duration-300 text-black dark:text-white"}
                    onClick={() => {
                        setExpanded(!expanded)
                    }}>
                    {expanded ? "Refermer" : "Plus d'infos"}
                    {expanded ? <Minimize2 strokeWidth={1.5} size={19}/> : <Maximize2 strokeWidth={1.5} size={19}/>}
                </button>
            }</>
            <div className={"w-full flex flex-row gap-4"}>
                {(links !== undefined && links!.length > 0) && links?.map((link, index) => {
                    return (
                        <a className={"w-full flex flex-row gap-3 p-5 items-center justify-center jetbrains-mono font-bold bg-gray-100/60 " +
                            "dark:bg-[#09090B]/60 border border-white/30 dark:border-black/30 py-3 rounded-3xl hover:border-white dark:hover:border-black hover:bg-gray-100 " +
                            "dark:hover:bg-[#09090B]/80 hover:scale-102 transition-all duration-300 text-black dark:text-white"}
                           href={link.path}
                           key={index}>
                            <link.icon/>
                            {link.title}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}