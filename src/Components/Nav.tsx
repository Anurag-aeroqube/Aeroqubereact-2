import { useState } from "react";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed w-full bg-white px-6 backdrop-blur-sm z-10 shadow-sm">
            <nav className="max-w-7xl mx-auto">
                <div className="flex justify-between sm:text-sm h-16 items-center">
                    <div className="text-base sm:text-lg sm:px-3 font-bold text-gray-900">
                        <span className="text-lg font-bold text-gray-900 tracking-widest">BR </span>
                        <span className="text-lg text-gray-900 tracking-widest">Architects</span>
                    </div>

                    {/* Hamburger Icon */}
                    <span className="sm:hidden cursor-pointer text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</span>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:space-x-8">
                        <a href="#projects" className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">Projects</a>
                        <a href="#about" className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">About</a>
                        <a href="#contact" className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (Visible when isOpen is true) */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        <a href="#projects" className="text-gray-500 text-lg font-medium hover:text-gray-900" onClick={() => setIsOpen(false)}>Projects</a>
                        <a href="#about" className="text-gray-500 text-lg font-medium hover:text-gray-900" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" className="text-gray-500 text-lg font-medium hover:text-gray-900" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
