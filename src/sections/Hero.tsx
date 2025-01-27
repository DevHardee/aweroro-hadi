import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-scroll';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const Hero = () => {
  return (
    <section
    id='home'
    className='flex flex-col items-center justify-center text-center bg-primary text-text min-h-screen px-6'
    >
        <motion.h1
        className='text-3xl md:text-5xl lg:text-7xl font-bold'
        initial= {{opacity: 0, y:-20}}
        animate= {{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
        >
            Hey, I'm <span className='text-accent'>Aweroro Hadi</span>
        </motion.h1>

        <motion.p
            className="text-lg md:text-2xl lg:text-3xl mt-4 max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
        >
            A frontend developer passionate about building sleek, responsive, and
            user-friendly web experiences.
        </motion.p>

        <motion.div
            className="mt-6 flex space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
        >
            <Link
            to="projects"
            smooth={true}
            duration={500}
            >
            <PrimaryButton
            title='View My Work'
            className='text-xs md:text-lg'
            />
            </Link>

            <Link
            to="contact"
            smooth={true}
            duration={500}
            >
            <SecondaryButton
            title='Contact Me'
            className='text-xs md:text-lg'
            />
            </Link>
        </motion.div>
    </section>
  )
}

export default Hero
