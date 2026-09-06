import {ProjectComponent} from "../ProjectComponent.tsx";
import {BuildingIcon, Cloud, GitBranch, Globe, Home, School, Smartphone} from "lucide-react";
import amicoockedIcon from "../../assets/icons/projectsIcons/amicooked.png";
import vinodomiaIcon from "../../assets/icons/projectsIcons/vinodomia.webp";
import chatperlipopetteIcon from "../../assets/icons/projectsIcons/chatperlipopette.png";
import groupietracker from "../../assets/icons/projectsIcons/groupietracker.png";
import {useTranslation} from "react-i18next";

export function ProjectSection() {
    const {t} = useTranslation();

    const projects = [
        <ProjectComponent title={"Portfolio"} finished={true} group={false}
                          description={t("portfolioDescription")}
                          tags={[{
                              color: "#FBAF63",
                              title: t("school"),
                              icon: School
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }]}
                          links={[{
                              icon: Globe,
                              title: t("website"),
                              path: "https://cbnoah.com"
                          }, {
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/portfolio"
                          }]}/>,
        <ProjectComponent title={"Am I Cooked ?"} finished={true} group={true}
                          description={t("amicoockedDescription")}
                          tags={[
                              {
                                  color: "#FBAF63",
                                  title: t("school"),
                                  icon: School
                              },
                              {
                                  color: "#502fff",
                                  title: "Mobile",
                                  icon: Smartphone
                              }
                          ]}
                          links={[{
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/am_i_cooked"
                          }]}
                          projectImagePath={amicoockedIcon}
        />,
        <ProjectComponent title={"Ymmo (API)"} finished={true} group={true}
                          description={t("ymmovDescription")}
                          tags={[{
                              color: "#FBAF63",
                              title: t("school"),
                              icon: School
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }, {
                              color: "#d127ba",
                              title: "Cloud",
                              icon: Cloud
                          }]}
                          links={[{
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/Minjxxe8/Ymmo_Api"
                          }]}/>,
        <ProjectComponent title={"VinoDomia"} finished={false} group={true}
                          description={t("vinodomiaDescription")}
                          tags={[{
                              color: "#fb6363",
                              title: t("work"),
                              icon: BuildingIcon
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }]}
                          projectImagePath={vinodomiaIcon}/>,
        <ProjectComponent title={"PictoFlutterChat"} finished={false} group={false}
                          description={t("pictoflutterchatDescription")}
                          tags={[
                              {
                                  color: "#43ec50",
                                  title: t("alone"),
                                  icon: Home
                              },
                              {
                                  color: "#502fff",
                                  title: "Mobile",
                                  icon: Smartphone
                              }
                          ]}
                          links={[{
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/PictoFlutterChat"
                          }]}/>,
        <ProjectComponent title={"ChatPerlipopette"} finished={true} group={true}
                          description={t("chatperlipopetteDescription")}
                          tags={[
                              {
                                  color: "#FBAF63",
                                  title: t("school"),
                                  icon: School
                              },
                              {
                                  color: "#502fff",
                                  title: "Mobile",
                                  icon: Smartphone
                              }
                          ]}
                          links={[{
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/ChatPerlipopette"
                          }]}
                          projectImagePath={chatperlipopetteIcon}/>,
        <ProjectComponent title={"Groupie Tracker"} finished={true} group={true}
                          description={t("groupietrackerDescription")}
                          tags={[{
                              color: "#FBAF63",
                              title: t("school"),
                              icon: School
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }]}
                          links={[{
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/GroupieTracker"
                          }]}
                          projectImagePath={groupietracker}/>
    ]


    return (
        <div className={"w-full min-h-full flex flex-col items-center justify-start xl:px-80 py-20 gap-20"}>
            <div className={"flex flex-col items-center justify-center gap-5"}>
                <h2 className={"text-5xl md:text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>{t("projects")}</h2>
                <div className={"flex flex-col gap-10"}>
                    {
                        projects.map(project => (project))
                    }
                </div>
            </div>
        </div>
    )
}