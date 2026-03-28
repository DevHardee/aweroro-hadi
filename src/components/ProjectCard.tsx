import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "./ProjectItems";

const ProjectCard = ({ title, description, image, techStack, liveLink, gitHubLink, type, contribution }: Project) => {
  return (
    <motion.div
      className="group relative bg-accent/40 backdrop-blur-sm p-5 rounded-2xl border border-white/5 shadow-xl flex flex-col h-full overflow-hidden transition-all duration-500 hover:border-primary/30"
      whileHover={{ y: -8 }}
    >
      {/* Type Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full backdrop-blur-md border ${type === 'team'
          ? 'bg-secondary/20 border-secondary/50 text-secondary'
          : 'bg-accent/20 border-accent/50 text-accent'
          }`}>
          {type}
        </span>
      </div>

      {/* Project Image Container */}
      <div className="relative w-full h-48 overflow-hidden rounded-xl bg-gray-900 mb-6">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          {liveLink && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full backdrop-blur-md text-white border border-white/20 hover:bg-primary transition-colors"
            >
              <FaExternalLinkAlt size={18} />
            </motion.a>
          )}
          {gitHubLink && (
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full backdrop-blur-md text-white border border-white/20 hover:bg-primary transition-colors"
            >
              <FaGithub size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold bg-white group-hover:bg-gradient-to-r from-red-400 to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 mt-3 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {contribution && (
          <div className="mt-4">
            <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">My Contribution:</h4>
            <div className="flex flex-col gap-2">
              {(Array.isArray(contribution) ? contribution : [contribution]).map((item, index) => (
                <p key={index} className="text-sm text-gray-200 leading-relaxed pl-3 border-l-2 border-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack */}
      <h1 className="text-sm font-bold text-white mt-6">Tools Used:</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <div className="flex flex-wrap gap-2">
            <span
              key={index}
              className="bg-accent/80 text-gray-300 px-3 py-1 rounded-md text-[11px] font-medium border border-white/5 group-hover:border-primary/20 transition-colors"
            >
              {tech}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ProjectCard

