import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    techStack: string[];
    liveLink?: string;
    gitHubLink?: string;
}

const ProjectCard = ({title, description, image, techStack, liveLink, gitHubLink}: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-accent p-6 rounded-xl shadow-lg flex flex-col items-center text-text"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />

      {/* Project Info */}
      <div className="text-center mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md mt-2">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-secondary text-text px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 mt-4">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-primary">
            <FaExternalLinkAlt size={20} />
          </a>
        )}
        {gitHubLink && (
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="text-primary">
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </motion.div>

  )
}

export default ProjectCard
