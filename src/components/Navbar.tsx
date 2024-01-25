import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


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
            <nav className="sticky top-0 z-10 pt-4 bg-black bg-cover">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between border-b border-opacity-60 border-gray-600 h-16 px-4">
                        <a href='#'>
                        <span className="text-2xl text-white font-custom font-light">Aelys.me</span>
                        </a>
                        <div className="hidden md:flex items-center space-x-4 py-2 text-white">
                        <a href="#" className='md:flex items-center justify-center hover:bg-gray-600 h-9 w-max px-4 py-2 rounded transition-colors'>Home</a>

                            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div className="flex items-center space-x-1">
                                    <a href="#" className='flex font-ubuntu items-center justify-center hover:bg-gray-600 h-9 w-max pl-2 pr-2 py-2 rounded transition-colors'>
                                        <span>About</span>
                                        <RiArrowDropDownLine className={`transform text-2xl transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                        </a>
                                </div>
                                {isDropdownOpen && (
                                    <div className="absolute p-2 left-0 mt-2 w-72 rounded-md shadow-lg bg-stone-950 border border-gray-600 text-black">
                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800">
                                            <div className='text-sm font-medium leading-none text-white'>Curriculum</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground text-white'>My personal CV with full info about my person.</p>
                                        </a>
                                        <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-zinc-800">
                                            <div className='text-sm font-medium leading-none text-white'>Hobbies</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground text-white'>Info about what i usually do when i'm bored</p>
                                        </a>             
                                    </div>
                                )}
                                
                            </div>
                            <a href="#" className='flex items-center justify-center hover:bg-gray-600 h-9 w-max px-4 py-2 rounded transition-colors'>Projects</a>
                            <a href="#" className='flex items-center justify-center hover:bg-gray-600 h-9 w-max px-4 py-2 rounded transition-colors'>Contact</a>
                        </div>
                        <button className="transition hover:scale-125 md:hidden text-2xl text-white">
                            <RxHamburgerMenu onClick={() => setIsNavOpen(!isNavOpen)} />
                        </button>
                        {isNavOpen && (
                            
                            <div className='absolute top-1/2 mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col margin-auto self-center align-middle p-2 w-[15rem] rounded-md shadow-lg bg-stone-950 border border-gray-600'>            
                            <button className="md:hidden text-2xl self-end text-white transition hover:scale-110">
                            <IoMdClose onClick={() => setIsNavOpen(!isNavOpen)} />
                        </button>               
                                  <a className='text-white p-2  hover:bg-gray-600 rounded' href='#'>
                                    <span>About</span>
                                  </a>
                                  <a className='text-white p-2 hover:bg-gray-600 rounded' href='#'>
                                    <span>Contact</span>
                                  </a>
                                  <a className='text-white p-2 hover:bg-gray-600 rounded' href='#'>
                                    <span>Projects</span>
                                  </a>
                            </div>

                        )}

                    </div>
                </div>
            </nav>
        </>
    );
}
                                