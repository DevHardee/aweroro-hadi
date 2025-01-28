import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id='about'
      className='bg-primary text-text py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center md:justify-around'
    >
      {/* Profile Image */}
      <motion.div
        className="w-32 h-40 sm:w-40 sm:h-40 md:w-[125%] md:h-[90vh] lg:w-2/3 lg:h-[600px] rounded-full overflow-hidden border-4 border-accent shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profilePic} alt="Aweroro Hadi" className="w-full h-full object-cover" />
      </motion.div>

      {/* About Text Content */}
      <motion.div
        className="mt-8 md:mt-0 md:ml-10 text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* About Me Section */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Me</h2>
        <p className="text-md md:text-lg lg:text-2xl mt-4 text-justify">
          I'm a passionate frontend developer who loves crafting sleek, responsive, 
          and user-friendly web experiences. With expertise in React, Next.js, and Tailwind CSS, 
          I focus on building high-performance, accessible, and visually appealing web applications.
        </p>

        {/* Education Section */}
        <h1 className='mt-6 font-bold text-2xl md:text-3xl lg:text-4xl'>Education</h1>  
        <div className='mt-2 flex flex-col sm:flex-row items-center sm:items-start gap-2 text-center sm:text-left'>
          <FaGraduationCap className="w-6 h-6 md:w-8 md:h-8" />
          <div className='text-lg md:text-2xl'>
            <p>Federal University of Agriculture, Abeokuta - Bsc Computer Science</p>
            <p className='text-sm md:text-lg text-gray-400'>March 2019 - December 2023</p>
          </div>
        </div>

        {/* Technologies Section */}
        <h1 className='mt-6 font-bold text-2xl md:text-3xl lg:text-4xl'>Technologies</h1>  
        <div 
        className="flex flex-wrap justify-center md:justify-start text-text gap-4 mt-5 md:max-w-lg">
          {[
            { label: "React", bg: "bg-secondary", link: 'https://react.dev/' },
            { label: "Tailwind CSS", bg: "bg-accent", link: 'https://tailwindcss.com/' },
            { label: "JavaScript", bg: "bg-red-600", link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { label: "TypeScript", bg: "bg-cyan-800", link: 'https://www.typescriptlang.org/' },
            { label: "Firebase", bg: "bg-green-900", link: 'https://firebase.google.com/' },
            { label: "Next.js", bg: "bg-pink-600", link: 'https://nextjs.org/' },
            { label: "Git", bg: "bg-rose-800", link: 'https://git-scm.com/' },
            { label: "GitHub", bg: "bg-slate-600", link: 'https://github.com/'},
            { label: "API Integration", bg: "bg-indigo-700", link: 'https://www.postman.com/what-is-an-api/' },
          ].map((tech, index) => (
            <a 
              key={index} 
              href={tech.link}
              target="_blank" 
              rel="noopener noreferrer"
              className={`${tech.bg} border transform transition-transform duration-300 hover:scale-110 hover:shadow-xl hover:border-gray-700 hover:font-bold py-1 px-3 rounded-full text-sm sm:text-base`}
            >
              {tech.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
