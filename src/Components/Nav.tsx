

function Nav()
{
    return(

   <div className="fixed w-full bg-white/90 backdrop-blur-sm z-10 shadow-sm">
    <nav className="max-w-7xl mx-auto  ">
        <div className="flex justify-between h-16 items-center ">
            <div className="text-lg font-bold text-gray-900">
            <span className="text-lg font-bold text-gray-900 tracking-widest">BR </span>
            <span className="text-lg  text-gray-900 tracking-widest">Architects</span>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
                <a  href="#projects"  className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">Projects</a>
                <a href="#about" className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">About</a>
                <a href="#contact" className="text-gray-500 px-3 hover:text-gray-900 text-lg font-medium">Contact</a>

            </div>
        </div>
    </nav>
   </div>

    );
};

export default Nav;
