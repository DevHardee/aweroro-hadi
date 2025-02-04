import ProjectCard from '../components/ProjectCard';
import { motion } from "framer-motion";
import { projects } from '../components/ProjectItems';

const Projects = () => {
  return (
    <section id="projects" className="text-text py-16 px-6 md:px-12 lg:px-20">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
