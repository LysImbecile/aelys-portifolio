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
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src="https://i.ibb.co/SdjZrxy/image.png" alt="blog" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Github Finder</h1>
                                    <p className="leading-relaxed mb-3 line-clamp-3"> This React frontend application integrates with the GitHub API, allowing you to search for users and view their basic profile information. A future route will display a grid of each user's public repositories.</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span
                                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                </path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src="https://i.ibb.co/tw0RqR3/weatherbot.png" alt="blog" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Weather Discord Bot</h1>
                                    <p className="leading-relaxed mb-3 line-clamp-3">Discord Bot integrated with a Weather public API, check your local city weather with simple slashcommands, built with Node, DiscordJS and Typescript.</p>
                                    <div className="flex items-center flex-wrap ">
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span
                                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                </path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3">
                            <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src="https://i.ibb.co/DtB7nLt/297572084-9ca6f606-bf3f-4a6a-a8d1-f16ed382aca4.png" alt="blog" />
                                <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                                    <h2 className="text-base font-medium text-indigo-300 mb-1">October 29, 2021</h2>
                                    <h1 className="text-2xl font-semibold mb-3">Auto Certification system</h1>
                                    <p className="leading-relaxed mb-3 line-clamp-3">Automation alowwing a fast course certification generation with a simple Excel sheet, built with Python and Canva library to generate texts on certifications models.</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span
                                            className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none"
                                                strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <path
                                                    d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                                </path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of card */}
                    </div>
                </div>
            </section>

        </div>
    );
}