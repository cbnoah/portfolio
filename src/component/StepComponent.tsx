import {Building2, MapPin, Maximize2, Minimize2} from "lucide-react";
import {useState} from "react";
import {DescriptionMarkdown} from "./DescriptionMarkdown.tsx";

type StepComponenentProps = {
    title: string,
    company: string,
    city: string,
    country: string,
    beginningDate: Date,
    endingDate?: Date,
    description: string,
    showExpandBtn?: boolean
}

export function StepComponent({
                                  title,
                                  company,
                                  city,
                                  country,
                                  beginningDate,
                                  endingDate,
                                  description,
                                  showExpandBtn
                              }: StepComponenentProps) {

    const [expanded, setExpanded] = useState(false);
    let [height] = useState(showExpandBtn == true && showExpandBtn !== null ? "h-160" : "h-150");
    return (
        <div
            className={`dark:bg-[#09090B]/45 bg-gray-200/45 ${description.length > 1000 ? (expanded ? "h-full" : height) : "h-full"} w-full rounded-3xl flex flex-col items-center justify-start py-10 px-15 gap-8 border border-white/30 dark:border-dark/30 hover:border-white dark:hover:border-black hover:bg-gray-200 dark:hover:bg-[#09090B]/70 transition-all duration-300`}>
            {/*Component header (for infos)*/}
            <div className={"w-full"}>
                <h3 className={"text-4xl font-extrabold mb-2 font-[Anybody] text-black dark:text-white"}>{title}</h3>
                <h4 className={"text-md font-medium mb-2 jetbrains-mono w-50 text-center bg-gray-100/80 dark:bg-black/80 rounded-xl text-black dark:text-white"}>{beginningDate.getMonth() + "/" + beginningDate.getFullYear()} - {endingDate ? endingDate.getMonth() + 1 + "/" + endingDate.getFullYear() : 'Present'}</h4>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"flex flex-row gap-2"}>
                        <Building2 className={"text-black dark:text-white"}/>
                        <h4 className={"text-lg mb-2 jetbrains-mono text-black dark:text-white"}>{company}</h4>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <MapPin className={"text-black dark:text-white"}/>
                        <h4 className={"text-lg mb-2 jetbrains-mono text-black dark:text-white"}>{city}, {country}</h4>
                    </div>
                </div>
            </div>
            {/*Text Part*/}
            <div className={"w-full h-full"}>
                <div
                    className={`${expanded ? '' : 'line-clamp-9'} markdown-content`}>
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
        </div>
    )
}