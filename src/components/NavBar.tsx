import React, {useState} from 'react'
import {Link} from 'react-scroll';
import {HiMenu, HiX} from 'react-icons/hi';

const NavBar = () => {
    const [isOpen, SetIsOpen] = useState(false);

  return (
   <nav className='fixed top-0 left-0 right-0 bg-primary text-text p-4'>
    <div className='flex justify-between items-center px-2'>
        <h1 className='text-xl font-bold'>Aweroro Hadi</h1>
        <div className='font-bold space-x-10 pr-4'>
            <Link
            to='hero'
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-accent'
            > Home
            </Link>
            <Link
            to='about'
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-accent'
            > About
            </Link>
            <Link
            to='projects'
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-accent'
            > Projects
            </Link>
            <Link
            to='contact'
            smooth={true}
            duration={500}
            className='cursor-pointer hover:text-accent'
            > Contact
            </Link>
        </div>
    </div>
   </nav>
  )
}

export default NavBar
