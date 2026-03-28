import { motion } from 'framer-motion';
import { FaGraduationCap, FaReact, FaGit, FaGithub, FaBriefcase } from 'react-icons/fa';
import { experiences } from '../components/ExperienceItems';

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

        {/* Content Section (Top Part) */}
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

      {/* Dynamic Work Experience Section - Full Width */}
      <motion.div
        className="mt-32 space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="text-center space-y-4">
          <motion.h3
            variants={itemVariants}
            className='font-bold text-2xl md:text-5xl flex items-center justify-center gap-4 bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent'
          >
            <FaBriefcase className="text-secondary" />
            Work Experience
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto rounded-full"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 overflow-hidden py-8">
          {/* Central Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0`}
              >
                {/* Desktop Date Badge (Opposite Side) */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-16' : 'justify-start pl-16'}`}>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-sm font-bold tracking-widest text-secondary uppercase bg-secondary/5 border border-secondary/20 px-6 py-2 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.05)]"
                  >
                    {exp.period}
                  </motion.span>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 w-8 h-8 md:w-12 md:h-12 bg-[#0b0c10] border-2 border-secondary/30 rounded-full z-20 flex items-center justify-center -translate-x-1.5 md:-translate-x-1/2 md:-translate-y-1/2 group">
                  <div className="w-2.5 h-2.5 md:w-4 md:h-4 bg-secondary rounded-full group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(0,212,255,0.5)]" />
                  {/* Outer Pulsing Ring */}
                  <div className="absolute inset-0 border-2 border-secondary rounded-full animate-ping opacity-20" />
                </div>

                {/* Experience Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-xl hover:bg-white/[0.06] hover:border-secondary/30 transition-all duration-500 shadow-2xl"
                  >
                    {/* Decorative Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative z-10 space-y-4">
                      <div className="md:hidden flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold text-secondary tracking-widest uppercase px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                          {exp.period}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                          {exp.role}
                        </h4>
                        <p className="text-lg font-medium text-gray-400 mt-1">{exp.company}</p>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0 shadow-[0_0_8px_rgba(0,212,255,1)]" />
                            {desc}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="text-[9px] md:text-[10px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-lg bg-secondary/5 border border-secondary/10 text-secondary/80 group-hover:border-secondary/40 group-hover:bg-secondary/10 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
