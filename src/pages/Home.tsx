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
                    <p className="text-white font-inter text-pretty pt-10">
                        Howdy! I am <span className="text-red-600">[Henri]</span> (aka Aëlys), a teenager who loves to learn and have some creative ideas, I love Linux, privacy &amp; open-source software. I also like art.
                    </p>
                    <p className="text-white font-inter text-pretty pt-4">

                        When I'm not programming, I like to play games, listen to music, watch movies/series and spend time with friends.
                    </p>
                    <p className="text-white text-pretty pt-4">
                        Best way to reach out to me is via Discord @A3lys.
                    </p>
                    <p className="flex text-red-600 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent decoration-indigo-500 underline-offset-4 underline pt-2 font-bold flex-wrap gap-3">
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-indigo-500 to-blue-500 hover:to-blue-200 bg-clip-text text-transparent rounded p-1" href="https://github.com/henriquejustee">GitHub</a>
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:to-pink-400 bg-clip-text text-transparent rounded p-1" href="https://www.youtube.com/channel/UCC82bHCIS667v3loXsPd5MA">Youtube</a>
                        <a target="_blank" className="transition hover:scale-110 duration-300 bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:to-pink-400 bg-clip-text text-transparent rounded p-1" href="https://discordid.netlify.app/?id=1122714514220142672">Discord</a>
                    </p>
                </div>
            </main>
        </div>



    );
}