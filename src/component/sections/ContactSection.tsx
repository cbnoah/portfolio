export function ContactSection() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center"}>
            <h2 className={"text-5xl font-bold mb-4 font-[DINdong]"}>Contact</h2>
            <div className={"w-full max-w-4xl h-full flex flex-col items-center justify-center p-8"}>
                <p className={"text-xl text-center mb-8 font-[DINdong]"}>N'hésitez pas à me contacter pour toute
                    question ou opportunité</p>
                <form action="https://formsubmit.co/contact@cbnoah.com" method="POST">
                    <div className={"flex flex-col w-full h-full bg-gray-200/70 rounded-lg p-10 items-center justify-start gap-4"}>
                        <input type={"text"} name={"name"} placeholder={"Votre nom"} className={"bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"}/>
                        <input type={"email"} name={"email"} placeholder={"Votre email"} className={"bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"}/>
                        <textarea name={"message"} placeholder={"Votre message"} className={"bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"} rows={5}/>
                    </div>
                    <button className={"w-full h-15 bg-gray-200/50 rounded-lg text-black font-bold py-2 px-4"} type={"submit"}>Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}