import Card from "../components/Card";
import { Projs } from "../types/Projs";


export default function Projects() {
    return (
        <div className={"relative ml-auto mr-auto  scroll-smooth p-2 bg-black"} style={{ minHeight: 'calc(100vh - 1000px)' }}>
            <section className="md:h-full flex items-center text-gray-600">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center mb-14">
                        <a href="https://github.com/henriquejustee?tab=repositories" className="text-base underline md:text-lg cursor-pointer transition duration-200 hover:text-red-400 text-red-600 mb-1">See all my projects here</a>
                        <h1 className="text-4xl md:text-6xl text-white font-semibold">My recent projects</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {/* Repeat this div for each card */}
                        <Card img="https://i.ibb.co/SdjZrxy/image.png" link="https://github.com/henriquejustee/Github-Finder" title="Github Finder" date="January, 2024" description="This React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will displayThis React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will display a grid of each user's public repositories." />
                        <Card img="https://i.ibb.co/tw0RqR3/weatherbot.png" date="December, 2023" link="https://github.com/henriquejustee/WeatherJS-discord-bot" title="Weather Discord Bot" description="Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript." />
                        <Card img="https://i.ibb.co/bvNFNv8/image.png" date="January, 2024" link="https://github.com/henriquejustee/aelys-cv" title="My online resume" description="My online resume version built with TailwindCSS and React, responsive and minimalistic, focused and direct." />
                        {/* End of card */}
                    </div>
                </div>
            </section>

        </div>
    );
}