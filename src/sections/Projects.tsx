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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="relative text-text py-32 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      {/* Background System */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 left-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl lg:text-3xl font-black bg-gradient-to-r from-white via-white/90 to-secondary bg-clip-text text-transparent inline-block tracking-tight">
            Portfolio Showcase
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Explore my latest digital experiences, ranging from high-performance web apps to collaborative ecosystem tools.
          </p>
        </motion.div>

        {/* Dynamic Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <div className="flex bg-[#1c1d24]/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-xl">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative text-xs md:text-base px-8 py-3 rounded-xl transition-all duration-500 font-bold text-sm tracking-wide overflow-hidden ${filter === tab.id
                  ? 'text-white'
                  : 'text-gray-500 hover:text-gray-300'
                  }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {filter === tab.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent shadow-lg shadow-secondary/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Staggered Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects;
