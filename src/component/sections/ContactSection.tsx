export function ContactSection() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center py-20 p-20"}>
            <h2 className={"text-6xl font-black mb-4 font-[Anybody] text-center text-black dark:text-white"}>Contact</h2>
            <div className={"w-full max-w-4xl h-full flex flex-col items-center justify-center p-8"}>
                <p className={"text-xl md:text-xl font-normal mb-4 font-[Anybody] text-center text-black dark:text-white"}>N'hésitez
                    pas à me contacter pour toute
                    question ou opportunité</p>
                <form action="https://formsubmit.co/contact@cbnoah.com" method="POST" className={"flex flex-col gap-5"}>
                    <div
                        className={"dark:bg-[#09090B]/45 bg-gray-200/45 md:w-175 xl:w-200 rounded-3xl flex flex-col items-center justify-start py-10 px-8 xl:px-15 pb-10 gap-8 border border-white/30"}>
                        <div className={"flex flex-col w-full"}>
                            <label htmlFor={"name"} className={"jetbrains-mono text-black dark:text-white"}>Votre
                                nom</label>
                            <input required={true} type={"text"} name={"name"} id={"name"} placeholder={"Foo Bar"}
                                   className={"w-full jetbrains-mono bg-gray-200/90 dark:bg-[#3d3e3f] text-black placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-[#313135] focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white dark:hover:border-black transition-all duration-300"}/>
                        </div>
                        <div className={"flex flex-col w-full"}>
                            <label htmlFor={"email"} className={"jetbrains-mono text-black dark:text-white"}>Votre
                                email</label>
                            <input required={true} type={"email"} name={"email"} id={"email"}
                                   placeholder={"foo.bar@mail.com"}
                                   className={"w-full jetbrains-mono bg-gray-200/90 dark:bg-[#3d3e3f] text-black placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-[#313135] focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white dark:hover:border-black transition-all duration-300"}/>
                        </div>
                        <div className={"flex flex-col w-full"}>
                            <label htmlFor={"message"} className={"jetbrains-mono text-black dark:text-white"}>Votre
                                message</label>
                            <textarea required={true} name={"message"} id={"message"}
                                      placeholder={"Bonjour, je voudrais vous contacter..."}
                                      className={"h-80 w-full jetbrains-mono bg-gray-200/90 dark:bg-[#3d3e3f] text-black placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-300 dark:border-[#313135] focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white dark:hover:border-black transition-all duration-300"}
                                      rows={5}/>
                        </div>
                    </div>
                    <button
                        className={"w-full flex flex-row gap-3 items-center justify-center jetbrains-mono font-bold bg-gray-100/60 " +
                            "dark:bg-[#09090B]/60 border border-white/30 py-3 rounded-3xl hover:border-white hover:bg-gray-100 hover:scale-102 " +
                            "dark:hover:bg-[#09090B] transition-all duration-300 text-black dark:text-white"}
                        type={"submit"}>
                        Envoyer
                    </button>
                </form>
                <div className={"flex flex-row gap-1.5 items-center justify-center"}>
                    <p className={"text-black dark:text-white"}>Sinon envoyer moi un mail à
                        <a href="mailto:contact@cbnoah.com"
                           className={"text-blue-500 hover:underline"}> contact@cbnoah.com </a>
                        ou envoyez moi un message sur <a
                            href="https://www.linkedin.com/in/noah-charrin-bourrat-9b3669332/"
                            className={"text-blue-500 hover:underline"}>LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    )
}