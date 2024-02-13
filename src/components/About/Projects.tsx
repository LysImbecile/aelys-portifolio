export default function Projects() {
    return (
        <div className="bg-black text-white flex flex-col px-5 md:px-14 py-14">
        <h1 className="text-4xl pt-5 ml-10">My recent works</h1>
        <p className="pt-4 max-w-xl text-wrap ml-10">Here are some repositories i'm working on or have worked on. You can check them out on my GitHub profile.</p> 
        <div className="grid gap-11 pt-14 md:grid-cols-3 grid-cols-1 p-20">
                  
        <section className="bg-gray-900 flex flex-col border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
            <img className="h-32 object-cover rounded-t-lg" src="https://i.ibb.co/SdjZrxy/image.png" alt="Project image" />
            <h1 className="text-2xl text-center font-ubuntu pt-3">Github profile finder</h1>
            <p className="text-start font-light mb-2 pt-2 px-4">
            This React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will display a grid of each user's public repositories.
            </p>
            <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 gap-2 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">ReactJS</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Javascript</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">Vite</span>
                    </div>
            <a href="https://github.com/henriquejustee/Todo-List" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </section>
        <section className="project-card bg-gray-900 flex flex-col border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
            <img className="project-image h-32 object-cover rounded-t-lg" src="https://logodownload.org/wp-content/uploads/2014/10/senac-logo-0.png" alt="Project image" />
            <div className="project-description flex-grow">
                <h1 className="project-title text-2xl text-center font-ubuntu pt-3">SENAC Discord bot</h1>
                <p className="project-summary text-start mb-10 font-light pt-2 px-4">A Discord bot with the intention to help SENAC students with automations, get all calendary events, tasks and more with just a slash command. built with DiscordJS, PrismaORM and SQLite.</p>
                <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 gap-2 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">DiscordJS</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Javascript</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">NodeJS</span>
                    </div>
            </div>
            <a href="https://github.com/henriquejustee/senac-dsbot" className="project-link text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </section>
            <section className="bg-gray-900 flex flex-col h-full w-auto border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/DtB7nLt/297572084-9ca6f606-bf3f-4a6a-a8d1-f16ed382aca4.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Auto certification system</h1>
                <p className="text-start font-light pt-2 mb-2 px-4">Automation alowwing a fast course certification generation with a simple Excel sheet, built with Python and Canva library to generate texts on certifications models.</p>
                    <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">Python</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Canva</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">Excel</span>
                    </div>
                
                <a href="https://github.com/henriquejustee/Advanced-Certification-System" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-auto border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-32 w-full object-cover rounded-t-lg" src="https://i.ibb.co/HrtN8sw/fastify-icon.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Rest API with Fastify</h1>
                <p className="text-start mb-2 font-light pt-2 px-4">Restful API of Create-Read-Update-Delete functions to simulate a real backend service of user registration, built with Prisma, Fastify, Typescript and Node.</p>
                <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 gap-2 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">Fastify</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Typescript</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">NodeJS</span>
                    </div>
                <a href="https://github.com/henriquejustee/Fastify-with-Prisma-REST-API" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-auto border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-32 w-full object-cover rounded-t-lg" src="https://i.ibb.co/C6N7TKQ/tkinterform.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Login Form</h1>
                <p className="text-start font-light mb-2 pt-2 px-4">A basic and atractive login form made with Python and Tkinter, i used the Tkinter-Designer software to convert a Figma project to Tkinter code and that's the final result!.</p>
                <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 gap-2 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">Python</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Tkinter</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">Figma</span>
                    </div>
                <a href="https://github.com/henriquejustee/Tkinter-Form" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
           <section className="bg-gray-900 flex flex-col h-full w-auto border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-32 w-full object-cover rounded-t-lg" src="https://i.ibb.co/tw0RqR3/weatherbot.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Weather API Discord Bot</h1>
                <p className="text-start font-light mb-1 pt-2 px-4">Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript.</p>
                <div className="tag-container flex justify-around border-t mt-1 items-center py-3 px-6 gap-2 bg-gray-800 rounded-lg shadow-lg">
                        <span className="tag text-yellow-500 text-sm font-bold py-1 px-3 bg-white rounded-full">DiscordJS</span>
                        <span className="tag text-pink-700 text-sm font-bold py-1 px-3 bg-white rounded-full">Typescript</span>
                        <span className="tag text-green-600 text-sm font-bold py-1 px-3 bg-white rounded-full">NodeJS</span>
                    </div>
                <a href="https://github.com/henriquejustee/WeatherJS-discord-bot" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                
            </section>
                </div>

        </div>
    );
}