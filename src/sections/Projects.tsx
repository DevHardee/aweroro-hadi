import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion, AnimatePresence } from "framer-motion";
import { projects } from '../components/ProjectItems';

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'individual' | 'team'>('all');

  const filteredProjects = projects.filter((project) =>
    filter === 'all' ? true : project.type === filter
  );

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'individual', label: 'Individual' },
    { id: 'team', label: 'Team Projects' },
  ] as const;

  return (
    <section id="projects" className="text-text py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-secondary bg-clip-text text-transparent inline-block">
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore my latest works, ranging from individual personal projects to collaborative team efforts.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 mb-12">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${filter === tab.id
              ? 'bg-secondary text-white shadow-lg shadow-primary/20'
              : 'bg-accent/50 hover:bg-secondary ring-1 ring-white/10'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default Projects

