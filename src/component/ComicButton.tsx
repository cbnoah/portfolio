type comicButtonType = {
    text: string,
    link?: string
}

export function ComicButton({text, link}: comicButtonType) {
    return <a href={link} target={"_blank"}
              className={"px-[1.3rem] rounded-2xl bg-white border-3 border-black font-[Panchang-Variable] cursor-pointer text-[2rem] sm:text-[2.5rem] md:text-[3rem] shadow-black shadow-[0.3rem_0.3rem] " +
                  "hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[0.63rem_0.63rem] transition-all"}>{text}
    </a>;
}