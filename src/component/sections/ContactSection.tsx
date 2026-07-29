export function ContactSection() {
    return (
        <div className={"w-full h-full flex flex-col items-center justify-center py-20 p-20 pb-40"}>
            <h2 className={"text-5xl font-bold mb-4 font-[DINdong]"}>Contact</h2>
            <div className={"w-full max-w-4xl h-full flex flex-col items-center justify-center p-8"}>
                <p className={"text-xl text-center mb-8 font-[DINdong]"}>N'hésitez pas à me contacter pour toute
                    question ou opportunité</p>
                <form action="https://formsubmit.co/contact@cbnoah.com" method="POST">
                    <div className={"flex flex-col w-300 h-80 bg-gray-200/70 rounded-lg p-10 items-center justify-start gap-4"}>
                        <input required={true} type={"text"} name={"name"} placeholder={"Votre nom"} className={"w-full bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"}/>
                        <input required={true} type={"email"} name={"email"} placeholder={"Votre email"} className={"w-full bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"}/>
                        <textarea required={true} name={"message"} placeholder={"Votre message"} className={"w-full bg-gray-200/50 text-black placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 rounded-lg"} rows={5}/>
                    </div>
                    <button className={"w-full h-15 bg-gray-200/50 rounded-lg text-black font-bold py-2 px-4"} type={"submit"}>Envoyer
                    </button>
                </form>
            </div>
        </div>
    )
}