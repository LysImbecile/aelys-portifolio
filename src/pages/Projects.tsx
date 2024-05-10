import Card from "../components/Card";
import { Projs } from "../types/Projs";


export default function Projects() {
    return (
        <div className={"relative ml-auto mr-auto  scroll-smooth p-2 bg-black bg-dot-white/[0.2] bg-fixed"} style={{ minHeight: 'calc(100vh - 1000px)' }}>
            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-14">
                        <a href="https://github.com/henriquejustee?tab=repositories" className="text-base underline md:text-lg cursor-pointer transition duration-200 hover:text-red-400 text-red-600 mb-1">See all my projects here</a>
                        <h1 className="text-4xl md:text-6xl text-white font-semibold">My recent projects</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                       
                        <Card img="src/assets/imgs/githublookupimg.png" link="https://github.com/henriquejustee/Github-Finder" title="Github Finder" date="January, 2024" description="This React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will displayThis React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will display a grid of each user's public repositories." />
                        <Card img="src/assets/imgs/weatherbot.png" date="December, 2023" link="https://github.com/henriquejustee/WeatherJS-discord-bot" title="Weather Discord Bot" description="Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript." />
                        <Card img="src/assets/imgs/discordlookup.png" date="January, 2024" link="https://github.com/henriquejustee/Discord_Lookup" title="Discord ID Lookup" description="This unofficial tool allows you to look up a Discord user or bot by their ID. It’s not affiliated with Discord itself. Simply input the user’s ID, and it will provide relevant information." />
                        
                    </div>
                </div>
            </section>

        </div>
    );
}