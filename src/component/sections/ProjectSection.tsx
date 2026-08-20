import {ProjectComponent} from "../ProjectComponent.tsx";
import {GitBranch, Globe, School, Smartphone} from "lucide-react";

export function ProjectSection() {
    const projects = [
        <ProjectComponent title={"Portfolio"} finished={true} group={false}
                          description={"Ce projet est le portfolio que vous êtes en train de consulter en ce moment. Il s'agit de la 2ème version de mon portfolio"}
                          tags={[{
                              color: "#FBAF63",
                              title: "École",
                              icon: School
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }]}
                          links={[{
                              icon: Globe,
                              title: "Website",
                              path: "http://localhost:5173"
                          }, {
                              icon: GitBranch,
                              title: "GitHub",
                              path: "https://github.com/cbnoah/portfolio"
                          }]}/>,
        <ProjectComponent title={"Am I Cooked ?"} finished={true} group={true}
                          description={"Une application culinaire révolutionnaire développée avec Flutter. « Am I Cooked » permet aux utilisateurs de découvrir de nouvelles recettes, de gérer leurs favoris et de suivre leurs progrès culinaires grâce à un système de gamification intégré."}
                          tags={[
                              {
                                  color: "#FBAF63",
                                  title: "École",
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
                          projectImagePath={"src/assets/icons/amicooked.png"}
        />,
        <ProjectComponent title={"VinoDomia"} finished={false} group={true}
                          description={""}
                          tags={[{
                              color: "#fb6363",
                              title: "Travail",
                              icon: School
                          }, {
                              color: "#2766d1",
                              title: "Web",
                              icon: Globe
                          }]}
                          projectImagePath={"src/assets/icons/vinodomia.webp"}/>,
        <ProjectComponent title={"PictoFlutterChat"} finished={false} group={true}
                          description={"Une réinterprétation de l'application PictoChat DS de Nintendo pour téléphones portables."}
                          tags={[
                              {
                                  color: "#00ff15",
                                  title: "Perso",
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
                              path: "https://github.com/cbnoah/PictoFlutterChat"
                          }]}/>,
        <ProjectComponent title={"ChatPerlipopette"} finished={true} group={true}
                          description={"Une application mobile Flutter permettant de découvrir des races de chats du monde entier, de localiser des refuges et des chatons disponibles, et de partager vos découvertes préférées."}
                          tags={[
                              {
                                  color: "#FBAF63",
                                  title: "École",
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
                          projectImagePath={"src/assets/icons/chatperlipopette.png"}/>,
        <ProjectComponent title={"Groupie Tracker"} finished={true} group={false}
                          description={"Une application web utilisant un serveur HTTP Golang et Go Templates pour récupérer des informations sur des groupes de musique via une API et les afficher sur un modèle de page d'artiste."}
                          tags={[{
                              color: "#FBAF63",
                              title: "École",
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
                          projectImagePath={"https://github.com/cbnoah/GroupieTracker/raw/master/static/images/groupie_tracker_logo_petit.png"}/>

    ]


    return (
        <div className={"w-full min-h-full flex flex-col items-center justify-start xl:px-80 py-20 gap-20"}>
            <div className={"flex flex-col items-center justify-center"}>
                <h2 className={"text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>Projets</h2>
                <div className={"flex flex-col gap-10"}>
                    {
                        projects.map(project => (project))
                    }
                </div>
            </div>
        </div>
    )
}