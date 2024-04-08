import { TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle, } from '../components/ui/text-reveal-card';

export default function About() {
    return (
        <>
            <div className={"relative h-full ml-auto mr-auto max-w-[90ch] scroll-smooth p-2 bg-fixed bg-black bg-dot-white/[0.2]"}>
                
                <div className={"p-5 pt-10 flex flex-col justify-start"}>
                    
                    <div className="text-white pb-10">
                    <h1 className={"text-4xl font-bold"}>About me ~ 🥀</h1>
                   
                    </div>
                    <section className="pl-5">
        <div>
                    <TextRevealCard className='w-full'
        text="Who am i?"
        revealText="Who are you?"
      >
        <TextRevealCardTitle>
        Basic Info
        </TextRevealCardTitle>
        
        <TextRevealCardDescription>
        Ayo! My real name is <span className="text-red-600">[ Henri ]</span> and i'm a dude with <span className="text-red-600">[ 17 ]</span> years old.
                           A person who loves freedom, possibilities and creativity, these few things give me more reasons to appreciate the beauty of life.
                           Actually i'm a focused learner, extracting knowledge from leafs of the internet, looking for a nice and cold bottle of coke to enjoy and think about the future.
        </TextRevealCardDescription>

        
      </TextRevealCard>
      </div>

                  
                   
                        <h2 className={"text-2xl pt-10 font-normal underline decoration-indigo-500 underline-offset-4 text-white"}><span>What i like to do</span></h2>
                        <p className="text-white pt-2 font-light text-wrap"> I like to spend a good time thinking, planning my routine. I don't play games for many hours like before, but i always entretein myself with some good games. I like to explore my Spotify, maybe someday i will have a decent playlist to share with everyone. Coding is my favorite hobby, at this time i am learning more about low level programming, Golang, Rust and relevant I.T stuff.
                        </p>                 

                        <h2 className={"text-2xl pt-10 font-normal underline decoration-indigo-500 underline-offset-4 text-white"}><span>My goals</span></h2>
                        <p className="text-white pt-2 font-light text-wrap"> My main goal is to complete my 18 years old being prepared to the not average adult life, start my graduation in Biomedicine and keep feeding my programming skills. One of my most important goals is to have a group of friends, a good one as nobody can live without friends.
                        </p>
                           </section>
                    
                </div>
                
            </div>
        </>
    );
}
