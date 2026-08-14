import {Building2, Expand, MapPin, Maximize2, Minimize2} from "lucide-react";
import {useState} from "react";

type StepComponenentProps = {
    title: string,
    company: string,
    city: string,
    country: string,
    beginningDate: Date,
    endingDate?: Date,
    description: string
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
            className={`bg-gray-200/45 ${expanded ? "h-full" : height} w-full rounded-3xl flex flex-col items-center justify-start py-10 px-15 gap-8 border border-white/30 hover:border-white hover:bg-gray-200 transition-all duration-300 `}>
            {/*Component header (for infos)*/}
            <div className={"w-full"}>
                <h3 className={"text-4xl font-extrabold mb-2 font-[Anybody] w-full"}>{title}</h3>
                <h4 className={"text-md font-medium mb-2 jetbrains-mono w-50 text-center bg-gray-100/80 rounded-xl"}>{beginningDate.getMonth() + "/" + beginningDate.getFullYear()} - {endingDate ? endingDate.getMonth() + 1 + "/" + endingDate.getFullYear() : 'Present'}</h4>
                <div className={"w-full flex flex-row justify-between items-center"}>
                    <div className={"flex flex-row gap-2"}>
                        <Building2/>
                        <h4 className={"text-lg mb-2 jetbrains-mono"}>{company}</h4>
                    </div>
                    <div className={"flex flex-row gap-2"}>
                        <MapPin/>
                        <h4 className={"text-lg mb-2 jetbrains-mono"}>{city}, {country}</h4>
                    </div>
                </div>
            </div>
            {/*Text Part*/}
            <div className={"w-full h-full"}>
                <p className={`${expanded ? '' : 'line-clamp-13 xl:line-clamp-13 2xl:line-clamp-15'}`}>{description}</p>
            </div>
            <>{(showExpandBtn === true && showExpandBtn !== null) &&
                <button
                    className={"w-full flex flex-row gap-3 items-center justify-center jetbrains-mono font-bold bg-gray-100/60 border border-white/30 py-3 rounded-3xl hover:border-white hover:bg-gray-100 hover:scale-102 transition-all duration-300"}
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