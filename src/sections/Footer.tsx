import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#424242] py-4 mt-16'>
        <div className='container mx-auto px-4 text-center '>
            <p>&copy; {new Date().getFullYear()} Aweroro Hadi. All rights reserved.</p>
            <div className="flex gap-4 text-2xl">
            <a href="https://github.com/yourgithub" target="_blank" className="text-text hover:text-accent">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="text-text hover:text-accent">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" className="text-text hover:text-accent">
              <FaTwitter />
            </a>
            <a href="mailto:youremail@example.com" className="text-text hover:text-accent">
              <FaEnvelope />
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer;