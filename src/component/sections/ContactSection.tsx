export function ContactSection() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center py-20 p-20 pb-40"}>
            <h2 className={"text-5xl font-bold mb-4 font-[DINdong]"}>Contact</h2>
            <div className={"w-full max-w-4xl h-full flex flex-col items-center justify-center p-8"}>
                <p className={"text-xl text-center mb-8 font-[DINdong]"}>N'hésitez pas à me contacter pour toute
                    question ou opportunité</p>
                <form action="https://formsubmit.co/contact@cbnoah.com" method="POST" className={"flex flex-col gap-5"}>
                    <div
                        className={"bg-gray-200/45 w-300 rounded-3xl flex flex-col items-center justify-start py-10 px-15 gap-8 border border-white/30"}>
                        <input required={true} type={"text"} name={"name"} placeholder={"Votre nom"}
                               className={"w-full jetbrains-mono bg-gray-200/90 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white transition-all duration-300"}/>
                        <input required={true} type={"email"} name={"email"} placeholder={"Votre email"}
                               className={"w-full jetbrains-mono bg-gray-200/90 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white transition-all duration-300"}/>
                        <textarea required={true} name={"message"} placeholder={"Votre message"}
                                  className={"w-full jetbrains-mono bg-gray-200/90 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg hover:border-white transition-all duration-300"}
                                  rows={5}/>
                    </div>
                    <button
                        className={"w-full flex flex-row gap-3 items-center justify-center jetbrains-mono font-bold bg-gray-100/60 border border-white/30 py-3 rounded-3xl hover:border-white hover:bg-gray-100 hover:scale-102 transition-all duration-300"}
                        type={"submit"}>
                        Envoyer
                    </button>
                </form>
                <div className={"flex flex-row gap-1.5 items-center justify-center"}>
                    <div className={"flex flex-row gap-1.5 items-center justify-center"}>
                        <p>Sinon envoyer moi un mail à </p>
                        <a href="mailto:contact@cbnoah.com"
                           className={"text-blue-500 hover:underline"}>contact@cbnoah.com</a>
                    </div>
                    <p>ou envoyer moi un message sur LinkedIn</p></div>
            </div>
        </div>
    )
}