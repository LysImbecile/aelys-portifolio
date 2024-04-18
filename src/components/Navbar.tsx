import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';



export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    let timer: NodeJS.Timeout;


    const handleMouseEnter = () => {
        clearTimeout(timer);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timer = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 300); // 300ms delay before closing the dropdown
    };

    return (
        <>
            <nav className="sticky top-0 z-50 pt-2 font-inter bg-black bg-dot-white/[0.2]">
                <div className="max-w-5xl mx-auto px-3">
                    <div className="flex justify-between border-b border-opacity-60 border-gray-600 h-20 px-4">
                        <Link to="/" className='flex space-x- items-center gap-3'>
                        <img className="h-12 transition hover:border-purple-600 duration-300 border-sky-200 border-2 rounded-full" src="https://avatars.githubusercontent.com/u/136639736?s=400&u=08b5262856856ddeaf04f3da973b1ecb246f87a7&v=4" alt="avatar" />
                            <a className="text-2xl bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent font-bold">Aelys.me</a>
                        </Link>
                        <div className="hidden md:flex items-center space-x-4 py-2 text-white">
                            <Link to="/" className='md:flex items-center justify-center hover:bg-gray-600 h-9 w-max px-4 py-2 rounded transition-colors'>Home</Link>

                            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div className="flex items-center space-x-1">
                                    <Link to="/about"
                                        className='flex font-ubuntu items-center justify-center hover:bg-gray-600 h-9 w-max pl-2 pr-2 py-2 rounded transition-colors'>
                                        <span>About</span>
                                        <RiArrowDropDownLine className={`transform text-2xl transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </Link>
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute p-2 left-0 mt-2 w-72 z-50 rounded-md shadow-lg bg-stone-950 border border-gray-600 text-black">
                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800">
                                            <div className='text-sm font-medium leading-none text-white'>Resume - 📖</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground text-white'>Not public anymore.</p>
                                        </a>
                                        <Link to='/about' className="block select-none z-50	 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800">
                                            <div className='text-sm font-medium leading-none text-white'>Introducing myself - 🗯️</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground text-white'>A detailed page made to have all important info about me.</p>
                                        </Link>
                                      
                                    </div>
                                )}

                            </div>
                            <Link to={'/projects'} className='flex items-center justify-center hover:bg-gray-600 h-9 w-max px-4 py-2 rounded transition-colors'>Projects</Link>
                        </div>
                        <button className="transition hover:scale-125 md:hidden text-2xl text-white">
                            <RxHamburgerMenu onClick={() => setIsNavOpen(!isNavOpen)} />
                        </button>
                        {isNavOpen && (

                            <div className=' absolute top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col margin-auto self-center align-middle p-2 w-[15rem] rounded-md shadow-lg bg-stone-950 border border-gray-600'>
                                <button className="md:hidden text-red-600 text-2xl self-end transition hover:scale-110">
                                    <IoMdClose onClick={() => setIsNavOpen(!isNavOpen)} />
                                </button>
                                <Link to="/" className='text-white p-2  hover:bg-gray-600 rounded'>
                                    <span>Home</span>
                                </Link>
                                <Link to="/about" className='text-white p-2  hover:bg-gray-600 rounded'>
                                    <span>About</span>
                                </Link>
                                <a href='#' className='text-white p-2  hover:bg-gray-600 rounded'>
                                    <span>Curriculum</span>
                                </a>
                                <Link to='/projects' className='text-white p-2 hover:bg-gray-600 rounded'>
                                    <span>Projects</span>
                                </Link>
                            </div>

                        )}

                    </div>
                </div>
            </nav>
        </>
    );
}
