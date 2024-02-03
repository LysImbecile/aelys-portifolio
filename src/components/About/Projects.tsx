export default function Projects() {
    return (
        <div className="bg-black text-white flex flex-col">
            <h1 className="text-4xl pt-14 md:pl-14 pl-6">My recent works</h1>
            <p className="md:pl-14 p-5 pt-4 max-w-xl text-wrap">Here are some repositories i'm working on or have worked on. You can check them out on my GitHub profile.</p> 
            <div className=" grid justify-between pt-14  grid-rows-4 gap-11 p-20 md:grid-cols-3 grid-cols-1">
                  
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full object-cover rounded-t-lg" src="https://i.ibb.co/p4NrWkQ/To-Doreact.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">To-Do React app</h1>
                <p className="text-start font-light pt-2 px-4">A React frontend application with the objective to add, edit and delete daily tasks, i will integrate it with a nodeJS backend soon and reformulate the website UX to grant a better and well worked application.</p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://logodownload.org/wp-content/uploads/2014/10/senac-logo-0.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">SENAC Discord bot</h1>
                <p className="text-start font-light pt-2 px-4">A Discord bot with the intention to help SENAC students with automations, get all calendary events, tasks and more with just a slash command. built with DiscordJS, PrismaORM and SQLite.</p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/DtB7nLt/297572084-9ca6f606-bf3f-4a6a-a8d1-f16ed382aca4.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Auto certification system</h1>
                <p className="text-start font-light pt-2 px-4">Automation alowwing a fast course certification generation with a simple Excel sheet, built with Python and Canva library to generate texts on certifications models.    </p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/HrtN8sw/fastify-icon.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Rest API with Fastify</h1>
                <p className="text-start font-light pt-2 px-4">Restful API of Create-Read-Update-Delete functions to simulate a real backend service of user registration, built with Prisma, Fastify, Typescript and Node.</p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
            <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/C6N7TKQ/tkinterform.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Login Form</h1>
                <p className="text-start font-light pt-2 px-4">A basic and atractive login form made with Python and Tkinter, i used the Tkinter-Designer software to convert a Figma project to Tkinter code and that's the final result!.</p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
           <section className="bg-gray-900 flex flex-col h-full w-fit border border-opacity-15 border-gray-200 hover:transition hover:-translate-y-5 hover:scale-105 rounded-lg items-stretch p-4">
                <img className="h-full w-full object-cover rounded-t-lg" src="https://i.ibb.co/tw0RqR3/weatherbot.png" alt="Project image" />
                <h1 className="text-2xl text-center font-ubuntu pt-3">Weather API Discord Bot</h1>
                <p className="text-start font-light pt-2 px-4">Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript.</p>
                <a href="https://example.com/project-link" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
            </section>
                </div>

        </div>
    );
}