export default function Projects() {
    return (
        <div className="bg-black text-white flex flex-col px-5 md:px-14 py-14">
        <h1 className="text-4xl pt-5 ml-10">My recent works</h1>
        <p className="pt-4 max-w-xl text-wrap ml-10">Here are some repositories i'm working on or have worked on. You can check them out on my GitHub profile.</p> 
        <div className="grid gap-11 pt-14 md:grid-cols-3 grid-cols-1 p-20">
                  
             <section className="bg-gray-900 flex flex-col border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
            <img className="h-48 object-cover rounded-t-lg" src="https://i.ibb.co/p4NrWkQ/To-Doreact.png" alt="Project image" />
         <h1 className="text-2xl text-center font-ubuntu pt-3">To-Do React app</h1>
         <p className="text-start font-light pt-2 px-4">A React frontend application with the objective to add, edit and delete daily tasks, i will integrate it with a nodeJS backend soon and reformulate the website UX to grant a better and well worked application.</p>
         <div className="flex justify-between px-8 mt-2 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-blue-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">ReactJS</span>
                        <span className="bg-purple-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">TailwindCSS</span>
                        <span className="bg-yellow-500 text-sm text-black py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Vite</span>
                    </div>
         <a href="https://github.com/henriquejustee/Todo-List" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
        </section>
        <section className="bg-gray-900 flex flex-col border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
    <img className="h-48 object-cover rounded-t-lg" src="https://logodownload.org/wp-content/uploads/2014/10/senac-logo-0.png" alt="Project image" />
    <div className="flex-grow">
        <h1 className="text-2xl text-center font-ubuntu pt-3">SENAC Discord bot</h1>
        <p className="text-start font-light pt-2 px-4">A Discord bot with the intention to help SENAC students with automations, get all calendary events, tasks and more with just a slash command. built with DiscordJS, PrismaORM and SQLite.</p>
        <div className="flex justify-between px-8 mt-7 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-green-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">NodeJS</span>
                        <span className="bg-yellow-500 text-sm text-black py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Javascript</span>
                        <span className="bg-blue-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">DiscordJS</span>
                    </div>
    </div>
    <a href="https://github.com/henriquejustee/senac-dsbot" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
</section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/DtB7nLt/297572084-9ca6f606-bf3f-4a6a-a8d1-f16ed382aca4.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Auto certification system</h1>
                <p className="text-start font-light pt-2 px-4">Automation alowwing a fast course certification generation with a simple Excel sheet, built with Python and Canva library to generate texts on certifications models.</p>
                    <div className="flex justify-between px-12 mt-2 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-yellow-400 text-sm text-black py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Python</span>
                        <span className="bg-pink-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Canva</span>
                        <span className="bg-green-500 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Excel</span>
                    </div>
                
                <a href="https://github.com/henriquejustee/Advanced-Certification-System" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/HrtN8sw/fastify-icon.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Rest API with Fastify</h1>
                <p className="text-start font-light pt-2 px-4">Restful API of Create-Read-Update-Delete functions to simulate a real backend service of user registration, built with Prisma, Fastify, Typescript and Node.</p>
                <div className="flex justify-between px-8 mt-7 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-green-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">NodeJS</span>
                        <span className="bg-black text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Fastify</span>
                        <span className="bg-purple-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">PrismaORM</span>
                    </div>
                <a href="https://github.com/henriquejustee/Fastify-with-Prisma-REST-API" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/C6N7TKQ/tkinterform.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Login Form</h1>
                <p className="text-start font-light pt-2 px-4">A basic and atractive login form made with Python and Tkinter, i used the Tkinter-Designer software to convert a Figma project to Tkinter code and that's the final result!.</p>
                <div className="flex justify-between px-8 mt-7 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-blue-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Tkinter</span>
                        <span className="bg-yellow-500 text-sm text-black py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Python</span>
                        <span className="bg-amber-500 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Figma</span>
                    </div>
                <a href="https://github.com/henriquejustee/Tkinter-Form" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
           <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/tw0RqR3/weatherbot.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Weather API Discord Bot</h1>
                <p className="text-start font-light pt-2 px-4">Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript.</p>
                <div className="flex justify-between px-8 mt-7 border-t pt-3 border-opacity-30 border-white">
                        <span className="bg-green-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">NodeJS</span>
                        <span className="bg-blue-500 text-sm text-black py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">Typescript</span>
                        <span className="bg-blue-600 text-sm text-white py-1 px-2 border border-opacity-30 border-blue-300 rounded-full">DiscordJS</span>
                    </div>
                <a href="https://github.com/henriquejustee/WeatherJS-discord-bot" className="text-center transition mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                
            </section>
                </div>

        </div>
    );
}