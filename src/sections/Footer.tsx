import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-text text-sm md:text-lg py-6 text-center">
       <p>&copy; {new Date().getFullYear()} Aweroro Hadi. All rights reserved.</p>
      
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4 text-xl">
        <a href="https://www.linkedin.com/in/hadi-aweroro-77887a215/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aweroro" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          <FaGithub />
        </a>
        <a href="https://x.com/AweroroH?t=Yg30WQIBQtFiVqcSqnTJqw&s=09" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
