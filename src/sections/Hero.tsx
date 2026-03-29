import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import ResumeDownloadCard from '../components/ResumeDownloadCard';
import { HiArrowNarrowDown } from 'react-icons/hi';

const Hero = () => {
    return (
        <section
            id='home'
            className='relative flex flex-col items-center justify-center text-center bg-primary text-text min-h-screen px-6 overflow-hidden'
        >
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Dynamic Background Glows */}
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-accent/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.15, 1, 1.15],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-secondary/20 blur-[100px] rounded-full"
                />

                {/* Subtle Particle System */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.2, 0],
                            scale: [0.5, 1, 0.5],
                            y: [0, -150, 0],
                            x: [0, (i % 2 === 0 ? 30 : -30), 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
                        style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${10 + Math.random() * 80}%`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 pt-20 px-4 w-full space-y-10 md:space-y-14">
                <div className="space-y-6">
                    <motion.h1
                        className='text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] md:leading-tight'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Hi, I'm
                        <span className='ml-3 bg-gradient-to-r from-accent via-white to-secondary bg-clip-text text-transparent drop-shadow-sm'>
                            Aweroro Hadi
                        </span>

                    </motion.h1>

                    <motion.p
                        className='text-sm md:text-xl lg:text-2xl font-bold bg-white/10 backdrop-blur-sm border border-white/5 px-6 py-2 rounded-xl text-gray-300 inline-block tracking-widest uppercase mt-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Frontend Developer & Software Engineer
                    </motion.p>
                </div>

                <motion.p
                    className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    I design and build <span className="text-white font-semibold">high-performance</span> digital solutions
                    with a focus on sleek design and seamless user experience.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        <PrimaryButton
                            title='View My Work'
                            className='w-full sm:w-auto !px-10 !py-3 text-lg'
                        />
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        <SecondaryButton
                            title='Get In Touch'
                            className='w-full sm:w-auto !px-10 !py-3 text-lg'
                        />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="flex justify-center"
                >
                    <ResumeDownloadCard />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer"
            >
                <Link to="about" smooth={true} duration={500} className="flex flex-col items-center gap-2">
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold group-hover:text-accent transition-colors">
                        Scroll Down
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-accent/50 group-hover:text-accent transition-colors"
                    >
                        <HiArrowNarrowDown size={28} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    )
}

export default Hero;
