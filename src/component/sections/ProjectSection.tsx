import {ProjectComponent} from "../ProjectComponent.tsx";
import {GitBranch, Globe} from "lucide-react";

export function ProjectSection() {
    const projects = [
        <ProjectComponent
            title={"Portfolio"}
            finished={false}
            group={false}
            description={"This portfolio"}
            projectImagePath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ppTzfLIMWP6t6PX2sw3nPS4bWzUjpGoMTD8BgVWq7rA0CnDsMcDHIFCF&s=10"}
            links={[{
                icon: Globe,
                title: "Website",
                path: "http://localhost:5173"
            }, {
                icon: GitBranch,
                title: "GitHub",
                path: "https://github.com/cbnoah/portfolio"
            }]}/>
    ]


    return (
        <div className={"w-full min-h-full flex flex-col items-center justify-start xl:px-80 py-20 gap-20"}>
            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-6xl font-black mb-4 font-[Anybody] text-center"}>Projets</h2>
                <div className={"flex flex-col gap-10"}>
                    {
                        projects.map(project => (project))
                    }
                </div>
            </div>
        </div>
    )
}