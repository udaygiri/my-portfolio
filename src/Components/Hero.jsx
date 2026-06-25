import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

function Hero() {
    // Move inside useMemo or outside the component to satisfy dependency rules
    const words = useMemo(() => ["Python Developer", "Django Developer", "Backend Engineer"], []);
    
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 1500);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            const timeout = setTimeout(() => {
                setReverse(false);
                setIndex((prev) => (prev + 1) % words.length);
            }, 500); // Small pause before typing next word
            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]); // Added 'words' here

    return (
        <div className="flex flex-col md:flex-row min-h-screen w-full relative">
            {/* Logo/Navbar */}
            <div className="absolute top-4 left-4 z-20 md:left-10">
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl font-bold text-[#001F54] bg-[#ffffff] rounded-xl border border-gray-200 cursor-pointer px-4 py-1 shadow-md"
                >
                    U
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="content-section min-h-[60vh] md:h-screen items-center justify-center bg-[#001F54] flex w-full md:w-1/2 pt-24 pb-16 md:py-0">
                <div className="px-6 sm:px-12 md:pl-20 md:pr-6 w-full">
                    <motion.div 
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="text-[#FEFCFB] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Oswald] font-bold"
                    >
                        UDAYGIRI D.
                    </motion.div>
                    <motion.div 
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                        className="text-[#FEFCFB] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Oswald] font-bold"
                    >
                        APARNATHI
                    </motion.div>

                    {/* Animated Text Container */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-[#FEFCFB] text-xl sm:text-2xl md:text-3xl mt-4 min-h-10 flex items-center"
                    >
                        <span className="font-mono bg-[#1282A2] text-[#FEFCFB] px-2 py-1 rounded">
                            {`${words[index].substring(0, subIndex)}${subIndex === words[index].length && !reverse ? "" : "|"}`}
                        </span>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="text-[#FEFCFB] text-2xl sm:text-3xl md:text-4xl mt-6 font-bold leading-tight"
                    >
                        Turning ideas into efficient and reliable software solutions.
                    </motion.div>
                </div>
            </div>

            {/* Image Section */}
            <div className="image-section h-[40vh] sm:h-[50vh] md:h-screen w-full md:w-1/2 overflow-hidden">
                <motion.img
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    src="src\assets\my-image.jpg"
                    alt="Hero Image"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Hero;
