import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Project } from "./ProjectItems";

const ProjectCard = ({ title, description, image, techStack, liveLink, gitHubLink, type, contribution }: Project) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="group relative bg-[#1c1d24]/50 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-2xl flex flex-col h-full overflow-hidden transition-all duration-500 hover:border-secondary/30 hover:shadow-secondary/5"
      whileHover={{ y: -10 }}
    >
      {/* Type Badge */}
      <div className="absolute top-4 right-4 z-10">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`text-[10px] uppercase tracking-[0.2em] font-black px-4 py-1.5 rounded-full backdrop-blur-xl border ${type === 'team'
            ? 'bg-secondary/10 border-secondary/30 text-secondary shadow-[0_0_15px_rgba(0,212,255,0.1)]'
            : 'bg-accent/10 border-accent/20 text-accent'
            }`}>
          {type}
        </motion.span>
      </div>

      {/* Project Image Container */}
      <div className="relative w-full h-52 overflow-hidden rounded-2xl bg-gray-900 mb-6 group-hover:shadow-2xl transition-all duration-500">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
          {liveLink && (
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl backdrop-blur-xl text-white border border-white/20 hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-xl"
            >
              <FaExternalLinkAlt size={20} />
            </motion.a>
          )}
          {gitHubLink && (
            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-4 rounded-2xl backdrop-blur-xl text-white border border-white/20 hover:bg-secondary hover:border-secondary transition-all duration-300 shadow-xl"
            >
              <FaGithub size={22} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="flex-grow space-y-4">
        <motion.h3
          variants={contentVariants}
          className="text-2xl font-bold bg-white group-hover:bg-gradient-to-r from-white via-secondary to-accent bg-clip-text text-transparent transition-all duration-500"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={contentVariants}
          className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors"
        >
          {description}
        </motion.p>

        {contribution && (
          <motion.div
            variants={contentVariants}
            className="mt-6 pt-6 border-t border-white/5"
          >
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">My Contribution:</h4>
            <div className="flex flex-col gap-3">
              {(Array.isArray(contribution) ? contribution : [contribution]).map((item, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary/50 group-hover/item:bg-secondary transition-colors shrink-0 shadow-[0_0_8px_rgba(0,212,255,0.3)]" />
                  <p className="text-[13px] text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-8">
        <motion.h4
          variants={contentVariants}
          className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4"
        >
          Tech Stack
        </motion.h4>
        <motion.div
          variants={contentVariants}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-white/[0.03] text-gray-400 px-3 py-1.5 rounded-lg text-[11px] font-bold border border-white/5 hover:border-secondary/30 hover:text-secondary transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;
