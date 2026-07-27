// @ts-ignore
import {Color4Bg} from '@color4bg/react';
import {Scrollbar} from "./component/Scrollbar.tsx";
import {ComicButton} from "./component/ComicButton.tsx";
import {useState} from "react";
import {useActiveSection} from "./hooks/useActiveSection.tsx";
import {AboutSection} from "./component/sections/AboutSection.tsx";
import {ContactSection} from "./component/sections/ContactSection.tsx";

function App() {
    const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
    const activeSection = useActiveSection(scrollEl, ["home", "about", "projects", "contact"]);

    return <Scrollbar ref={setScrollEl}>
        <div className="relative h-screen">
            <div
                className={`fixed inset-0 z-1 w-screen h-screen pointer-events-none backdrop-blur-2xl transition-opacity duration-500 ${activeSection == "home" ? "opacity-0" : "opacity-100"}`}></div>
            <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none">
                <Color4Bg style={"curve-gradient"}
                          colors={["#5c5c5c", "#808080", "#b0b0b0", "#e6e6e6", "#EAEBE8", "#8f8f8f"]}
                          loop={true}
                          seed={1000}
                          options={{speed: 1, noise: 0.15}}/>
            </div>
            <div className={"flex flex-col gap-50"}>
                <div
                    className="w-full h-screen z-10 relative cursor-default select-none p-10 flex flex-col justify-end items-start"
                    id={"home"}>
                    <div className={"flex flex-row"}>
                        <h1 className="font-[Panchang-Variable] font-semibold text-9xl hover:font-black transition-all">N</h1>
                        <h1 className="font-[Panchang-Variable] font-semibold text-9xl hover:font-black transition-all">o</h1>
                        <h1 className="font-[Panchang-Variable] font-semibold text-9xl hover:font-black transition-all">a</h1>
                        <h1 className="font-[Panchang-Variable] font-semibold text-9xl hover:font-black transition-all">h</h1>
                    </div>
                    <div className="flex flex-row justify-start items-center">
                        <h1 className="font-[Panchang-Variable] font-semibold text-[7rem] hover:font-black transition-all duration-300">CHARRIN</h1>
                        <div className={"flex flex-row"}>
                            <h1 className="font-[Panchang-Variable] font-semibold text-8xl">-</h1>
                            <h1 className="font-[Panchang-Variable] font-semibold text-8xl">-</h1></div>
                        <h1 className="font-[Panchang-Variable] font-semibold text-[7rem] hover:font-black transition-all duration-300">BOURRAT</h1>
                    </div>
                    <div className={"w-full h-30 flex flex-row justify-between items-center"}>
                        <h2 className="font-[DINdong] font-black text-[4rem]">Etudiant en informatique</h2>
                        <div className={"flex flex-row justify-center items-center gap-5"}>
                            <ComicButton text="CV"
                                         link="https://drive.google.com/file/d/1G76TPsTcdBMbECQ9myqVTopUqWO0IgC-/view?usp=sharing"/>
                            <ComicButton text="GitHub" link="https://github.com/cbnoah"/>
                        </div>
                    </div>
                </div>
                <section id={"about"}
                         className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection == "about" ? "opacity-100" : "opacity-0"}`}>
                    <AboutSection/>
                </section>
                <section id={"projects"}
                         className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection == "projects" ? "opacity-100" : "opacity-0"}`}>
                    <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada, metus at
                        venenatis
                        vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer faucibus facilisis
                        purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem. Morbi quis erat
                        sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit amet accumsan
                        ipsum.
                        In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi eu ligula
                        faucibus
                        turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus a dui quis
                        viverra.
                        Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus iaculis diam sit amet mi
                        suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper. Aliquam fringilla vel
                        eros
                        ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada,
                        metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer
                        faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.
                        Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit
                        amet
                        accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi
                        eu
                        ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus
                        a
                        dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus
                        iaculis
                        diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper.
                        Aliquam
                        fringilla vel eros ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada,
                        metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer
                        faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.
                        Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit
                        amet
                        accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi
                        eu
                        ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus
                        a
                        dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus
                        iaculis
                        diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper.
                        Aliquam
                        fringilla vel eros ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada,
                        metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer
                        faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.
                        Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit
                        amet
                        accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi
                        eu
                        ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus
                        a
                        dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus
                        iaculis
                        diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper.
                        Aliquam
                        fringilla vel eros ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada,
                        metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer
                        faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.
                        Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit
                        amet
                        accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi
                        eu
                        ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus
                        a
                        dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus
                        iaculis
                        diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper.
                        Aliquam
                        fringilla vel eros ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada,
                        metus at venenatis vehicula, enim orci cursus orci, sed pharetra nisi eros eget tortor. Integer
                        faucibus facilisis purus vel faucibus. Vivamus ac arcu eu risus tincidunt vehicula eu id lorem.
                        Morbi quis erat sodales, blandit libero eget, lacinia ligula. Nunc sit amet mollis mauris, sit
                        amet
                        accumsan ipsum. In hac habitasse platea dictumst. In faucibus leo nec diam rutrum maximus. Morbi
                        eu
                        ligula faucibus turpis ornare mollis. Praesent elementum a felis vel hendrerit. Praesent rhoncus
                        a
                        dui quis viverra. Sed vulputate dictum neque, eget sodales tortor sagittis vitae. Vivamus
                        iaculis
                        diam sit amet mi suscipit fermentum. Nullam malesuada ex rhoncus nisi mollis ullamcorper.
                        Aliquam
                        fringilla vel eros ac mattis.

                        Nulla facilisi. In nibh mauris, pellentesque id finibus vehicula, euismod vitae magna. Nunc vel
                        nulla sapien. In hendrerit lacinia mauris sit amet ornare. Nunc faucibus auctor est id gravida.
                        Aenean suscipit, dolor nec tempor fermentum, nisi purus rutrum massa, aliquet venenatis tellus
                        tortor eget nibh. Maecenas convallis suscipit leo id finibus. Quisque semper mi est, suscipit
                        faucibus sapien accumsan sit amet. Pellentesque suscipit libero lacinia fermentum lobortis.
                        Etiam
                        euismod, leo elementum efficitur auctor, velit arcu laoreet nisi, ac euismod mi magna sed dolor.

                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        Suspendisse
                        sit amet lectus at ex imperdiet pellentesque. Integer sed porta ex, id fringilla metus. Donec
                        luctus
                        posuere tempus. Ut pellentesque euismod arcu, elementum tempus arcu sodales sed. Donec quis
                        bibendum
                        massa. Aenean id nisi leo. Pellentesque laoreet ex nec sem gravida rutrum. Etiam placerat nec
                        dolor
                        non aliquet.

                        Suspendisse vel tincidunt erat. Sed bibendum fermentum imperdiet. Aenean ex sapien, interdum non
                        dictum eget, sollicitudin at sapien. Sed fringilla dui est, non ornare ex pharetra eu. Donec
                        turpis
                        urna, convallis sit amet luctus sed, convallis in leo. Integer nisl purus, efficitur eu dui nec,
                        pharetra pellentesque ex. Curabitur a dui purus. Praesent pellentesque fringilla enim id
                        lacinia.

                        Vestibulum pellentesque venenatis arcu nec blandit. Etiam fringilla sem faucibus sagittis
                        consequat.
                        Proin a nunc vitae nibh tristique bibendum sit amet vulputate nunc. Ut porttitor dolor id ornare
                        rutrum. Vestibulum ut massa nisl. Nulla vitae eros sit amet metus imperdiet malesuada id sit
                        amet
                        lectus. Nam ac felis ipsum. Curabitur dui quam, volutpat a orci sit amet, tristique aliquet ex.
                        Pellentesque ac dui nec sem placerat pulvinar. Phasellus lacinia maximus nisl, faucibus gravida
                        lorem lacinia eget.
                    </text>
                </section>
                <section id={"contact"}
                         className={`relative z-10 rounded-t-3xl pt-40 transition-opacity duration-300 ${activeSection == "contact" ? "opacity-100" : "opacity-0"}`}>
                    <ContactSection/>
                </section>
            </div>
        </div>
    </Scrollbar>
}

export default App;