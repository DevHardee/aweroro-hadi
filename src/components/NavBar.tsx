import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import MaxWidthWrapper from './MaxWidthWrapper';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MaxWidthWrapper>
      <nav className="fixed top- left-0 right-0 bg-primary text-text p-4 shadow-md z-50">
      <div className="flex justify-between items-center px-2">
        <h1 className="text-lg md:text-xl lg:text3xl font-bold">Aweroro Hadi</h1>

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
              className="cursor-pointer hover:text-accent text-md md:text-lg lg:text-xl"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-primary flex font-bold flex-col items-center text-text py-4 space-y-4">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-accent text-md"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
    </MaxWidthWrapper>
  );
};

export default NavBar;
