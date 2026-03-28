import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import ResumeDownloadCard from '../components/ResumeDownloadCard';
import { useRef } from 'react';
import CursorTrail from '../components/CursorTrail';
import { HiArrowNarrowDown } from 'react-icons/hi';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    return (
        <section
            id='home'
            ref={heroRef}
            className='relative flex flex-col items-center justify-center text-center bg-primary text-text min-h-screen px-6 overflow-hidden'
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-accent/20 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/20 blur-[120px] rounded-full"
                />
            </div>

            <CursorTrail targetRef={heroRef} />

            <div className="relative z-10 max-w-5xl">
                <motion.h1
                    className='text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-tight'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hi, I'm <span className='bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent'>Aweroro Hadi</span>
                    <br />
                    Frontend Developer & Software Engineer
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl lg:text-3xl mt-6 text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    I design and build <span className="text-text font-semibold">high-performance</span> digital solutions
                    with a focus on sleek design and seamless user interaction.
                </motion.p>

                <motion.div
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        <PrimaryButton
                            title='View My Work'
                            className='!px-8 !py-4 text-lg'
                        />
                    </Link>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                    >
                        <SecondaryButton
                            title='Get In Touch'
                            className='!px-8 !py-4 text-lg'
                        />
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-10"
                >
                    <ResumeDownloadCard />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-500 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-accent"
                >
                    <HiArrowNarrowDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero

