import { useEffect, useRef } from 'react';


export default function Home () {
    
    return (
            <div className={"relative ml-auto mr-auto max-w-[80ch] scroll-smooth p-2 bg-black"} style={{ minHeight: 'calc(100vh - 1000px)'}}>
               <main className="overflow-x-hidden px-7 py-10">
                <div className="prose prose-invert m-automb-8">
                    <h1 className="text-4xl font-bold text-white mb-0">Aelys</h1>
                    <p className="text-white pt-4">
                    Howdy! I am <span className="text-red-600">[Henri]</span> (aka Aelys), a self-taught developer. I love Linux, privacy &amp; open-source software. I also like art.
                    </p>
                    <p className="text-white pt-4">
                    When I'm not programming, I like to play games, listen to music, watch movies/series and spend time with friends.
                    </p>
                    <p className="text-white pt-4">
                    Best way to reach out to me is via Discord @A3lys.
                        </p>
                    <p className="flex text-red-600 underline pt-2 font-bold flex-wrap gap-3">
                        <a target="_blank" className="transition hover:bg-red-950 rounded p-1" href="https://github.com/henriquejustee">GitHub</a>
                        <a target="_blank" className="transition hover:bg-red-950 rounded p-1" href="https://www.youtube.com/channel/UCC82bHCIS667v3loXsPd5MA">Youtube</a>
                    </p>
                 
                </div>
               </main>
            </div>
      
    );
}