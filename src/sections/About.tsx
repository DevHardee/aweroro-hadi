import { motion } from 'framer-motion';
import { FaGraduationCap, FaReact, FaGit, FaGithub } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id='about'
      className='text-text py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto'
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Profile Image & Decorative Elements */}
        <motion.div
          className="lg:col-span-5 relative"
          variants={itemVariants}
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] group">
            <img
              src={'/assets/profile.jpg'}
              alt="Aweroro Hadi"
              loading='lazy'
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Decorative Background Shapes */}
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 blur-3xl rounded-full -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 blur-3xl rounded-full -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-accent/20 rounded-2xl -rotate-3 -z-10" />
        </motion.div>

        {/* Content Section */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              I'm a passionate <span className="text-accent font-medium">frontend developer</span> who loves crafting sleek, responsive,
              and user-friendly web experiences. With expertise in React, Next.js, and Tailwind CSS,
              I focus on building high-performance, accessible, and visually appealing web applications that solve real-world problems.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-accent/5 border border-white/5 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 blur-3xl rounded-full group-hover:bg-accent/20 transition-colors" />
            <h3 className='font-bold text-2xl md:text-3xl mb-6 flex items-center gap-3'>
              <FaGraduationCap className="text-accent" />
              Education
            </h3>
            <div className='relative z-10'>
              <p className="text-xl md:text-2xl font-semibold text-white">
                Federal University of Agriculture, Abeokuta
              </p>
              <p className="text-lg text-accent/80 font-medium">Bsc Computer Science</p>
              <p className='text-sm md:text-md text-gray-500 mt-2 uppercase tracking-widest'>March 2019 - December 2023</p>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants}>
            <h3 className='font-bold text-2xl md:text-3xl mb-8'>Technologies & Tools</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "React", icon: FaReact, color: "hover:bg-cyan-500/20 hover:border-cyan-500/40" },
                { label: "Next.js", icon: "▲", color: "hover:bg-white/10 hover:border-white/20" },
                { label: "TypeScript", icon: "TS", color: "hover:bg-blue-600/20 hover:border-blue-600/40" },
                { label: "Tailwind CSS", icon: "🎨", color: "hover:bg-sky-400/20 hover:border-sky-400/40" },
                { label: "JavaScript", icon: "JS", color: "hover:bg-yellow-400/20 hover:border-yellow-400/40" },
                { label: "Firebase", icon: "🔥", color: "hover:bg-orange-500/20 hover:border-orange-500/40" },
                { label: "Git", icon: FaGit, color: "hover:bg-orange-600/20 hover:border-orange-600/40" },
                { label: "GitHub", icon: FaGithub, color: "hover:bg-purple-500/20 hover:border-purple-500/40" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-sm md:text-base font-medium flex items-center gap-3 transition-all duration-300 ${tech.color}`}
                >
                  <span className="text-lg font-bold">
                    {typeof tech.icon === 'string' ? tech.icon : <tech.icon />}
                  </span>
                  {tech.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
