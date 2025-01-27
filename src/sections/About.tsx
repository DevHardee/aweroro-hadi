import React from 'react';
import {motion} from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section
        id='about'
        className='bg-primary text-text py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-around'
        >
            <motion.div
            className="w-40 h-40 md:w-11/12 md:h-[60vh] lg:w-1/4 lg:h-[500px] rounded-full overflow-hidden border-4 border-accent shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <img src={profilePic} alt="Aweroro Hadi" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
            className="mt-6 md:mt-0 md:ml-10 text-center md:text-left max-w-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* About Me Description */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
            <p className="text-md md:text-lg lg:text-xl mt-4 text-justify">
            I'm a passionate frontend developer who loves crafting sleek, responsive, 
            and user-friendly web experiences. With expertise in React, Next.js, and Tailwind CSS, 
            I focus on building high-performance, accessible, and visually appealing web applications.
            </p>

            {/* Education */}
            <h1 className='mt-5 font-bold text-2xl'>Education</h1>  
            <div className='mt-2 flex items-center gap-2'>
              <FaGraduationCap/>
              <p>Federal University of Agriculture, Abeokuta - Bsc Computer Science</p>
            </div>
            <p className='ml-6'>March 2019 - December 2023</p>

            {/* Technologies */}
           <div>
                 <h1 className='mt-5 font-bold text-2xl'>Technologies</h1>  
                 <div className="flex flex-wrap text-text gap-6 mt-5 md:max-w-sm">
                    <span className="bg-secondary border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">React</span>
                    <span className="bg-accent border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">Tailwind CSS</span>
                    <span className="bg-red-600 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">JavaScript</span>
                    <span className="bg-cyan-800 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">TypeScript</span>
                    <span className="bg-green-900 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">Firebase</span>
                    <span className="bg-pink-600 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">Nextjs</span>
                    <span className="bg-rose-800 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">Git</span>
                    <span className="bg-slate-600 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">Github</span>
                    <span className="bg-indigo-700 border overflow-hidden transform transition-transform duration-300 hover:scale-125 hover:shadow-2xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full">API Integration</span>
                </div>
           </div>
         </motion.div>
    </section>
  )
}

export default About
