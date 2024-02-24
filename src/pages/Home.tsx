import { PiPlanetLight } from "react-icons/pi";
import { TypewriterEffect } from "../components/ui/typewriter-effect";



export default function Home() {
    const words = [
        {
          text: "I'm",
          className: "text-white text-5xl",
        },
        {
          text: "Aëlys",
          className: "bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent text-5xl",
        },
        {
          text: "a",
          className: "text-white text-5xl pl-2 md:pl-0",
        },
        {
          text: "Full-Stack",
          className: "bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent text-5xl",
        },
        {
            text: "developer",
            className: "bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent text-5xl"
        }
      ];

    return (
        <div className={"dark:bg-black relative bg-fixed ml-auto mr-auto max-w-[80ch] scroll-smooth p-2"} style={{ minHeight: 'calc(100vh - 80px)' }}>

            <main className="overflow-x-hidden px-7 py-5 flex">
                <div className="prose prose-invert m-automb-8">
                    <div className="pt-10">
                <TypewriterEffect className="text-start text-wrap font-inter" words={words} />
                    </div>
                    <p className="text-white font-inter text-pretty pt-10">
                        Howdy! I am <span className="text-red-600">[Henri]</span> (aka Aëlys), a fullstack developer when it comes to doing large projects with my friends, and backend when it's calmer. I love Linux, privacy &amp; open-source software. I also like art.
                    </p>
                    <p className="text-white font-inter text-pretty pt-4">

                        When I'm not programming, I like to play games, listen to music, watch movies/series and spend time with friends.
                    </p>
                    <p className="text-white text-pretty pt-4">
                        Best way to reach out to me is via Discord @A3lys.
                    </p>
                    <p className="flex text-red-600 decoration-indigo-500 underline-offset-4 underline pt-2 font-bold flex-wrap gap-3">
                        <a target="_blank" className="transition  hover:bg-red-950 rounded p-1" href="https://github.com/henriquejustee">GitHub</a>
                        <a target="_blank" className="transition hover:bg-red-950 rounded p-1" href="https://www.youtube.com/channel/UCC82bHCIS667v3loXsPd5MA">Youtube</a>
                    </p>
                </div>
            </main>
        </div>

    );
}