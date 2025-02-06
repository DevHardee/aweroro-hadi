import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import MaxWidthWrapper from './MaxWidthWrapper';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-primary shadow-md z-50">
      <MaxWidthWrapper>
        <nav className="text-text px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold">Aweroro Hadi</h1>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              {isOpen ? (
                <HiX className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
              ) : (
                <HiMenu className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
              )}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 pr-4 font-bold">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer pb-2 relative text-md md:text-lg lg:text-xl font-bold 
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] 
                  after:bg-secondary after:bottom-0 after:left-0 after:transition-transform 
                  after:duration-500 after:origin-left hover:after:scale-x-100"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu*/}
          {isOpen && (
            <div className="md:hidden flex flex-col items-center text-text py-4 space-y-4">
              {['home', 'about', 'projects', 'contact'].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer pb-2 relative text-md md:text-lg lg:text-xl font-bold 
                  after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] 
                  after:bg-secondary after:bottom-0 after:left-0 after:transition-transform 
                  after:duration-500 after:origin-left hover:after:scale-x-100"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </MaxWidthWrapper>
    </div>
  );
};

export default NavBar;
