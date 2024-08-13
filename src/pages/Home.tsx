import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { FaLocationDot } from "react-icons/fa6";
import { IoBagSharp } from "react-icons/io5";


export default function Home() {
    const words = [
        {
          text: "I'm",
          className: "text-white text-5xl",
        },
        {
          text: "Henri",
          className: "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent text-5xl",
        },
        {
          text: "a",
          className: "text-white text-5xl pl-2 md:pl-0",
        },
        {
          text: "curious",
          className: "bg-purple-600 text-5xl",
        },
        {
            text: "teenager.",
            className: "bg-red-600 text-5xl"
        }
      ];

    return (
        <div className={"dark:bg-black relative bg-fixed ml-auto mr-auto max-w-[80ch] scroll-smooth p-2"} style={{ minHeight: 'calc(100vh - 80px)' }}>
            <main className="overflow-x-hidden px-7 py-5 flex">
                <div className="prose prose-invert m-automb-8">
                    <div className="pt-10">
                <TypewriterEffect className="text-start text-wrap font-inter" words={words} />
                    </div>
                    <div className="flex-col">
                        <p className="text-white flex text-pretty pt-10">
                            <FaLocationDot className="inline text-2xl mx-1  text-white text-pretty" /> ~  <span className="bg-red-600/50 mx-2 px-1 rounded "> From Brazil/Campinas</span>
                        </p>
                        <p className="text-white flex text-pretty pt-5">
                            <IoBagSharp className="inline text-2xl mx-1  text-white text-pretty" /> ~  <span className="bg-red-600/50 mx-2 px-1 rounded "> Currently unemployed ( Looking for a job ) </span>
                        </p>
                    </div>
                    <p className="text-white font-inter text-pretty pt-10">
                        Howdy! I am <span className="text-red-600">[Henri]</span> (aka Henrique), a 17 yo teenager who loves to learn and have some creative ideas, I love Linux, privacy &amp; open-source software. I also like art.
                    </p>
                    <p className="text-white font-inter text-pretty pt-4">

                        When I'm not programming, I like to play games, listen to music, watch movies/series and spend time with friends.
                    </p>
                    <p className="flex text-red-600 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent decoration-indigo-500 underline-offset-4 underline pt-2 font-bold flex-wrap gap-3">
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-indigo-500 to-blue-500 hover:to-blue-200 bg-clip-text text-transparent rounded p-1" href="https://github.com/henriquejustee">GitHub</a>
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-indigo-500 to-blue-500 hover:to-blue-200 bg-clip-text text-transparent rounded p-1" href="https://github.com/henriquejustee">Curriculum</a>
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-indigo-500 to-blue-500 hover:to-blue-200 bg-clip-text text-transparent rounded p-1" href="https://github.com/henriquejustee">Blog</a>
                    </p>
                </div>
            </main>
        </div>

    );
}