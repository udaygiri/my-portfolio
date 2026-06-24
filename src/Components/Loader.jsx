import { useEffect } from "react";
import { motion } from "framer-motion";

function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3500); // Loader screens for 2.5 seconds total

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Letter animations for typing/fade effect
  const text = "Meet the mind behind the code";
  
  // Construct words with absolute start indices for sequential animations
  let cumulativeIndex = 0;
  const wordsWithIndices = text.split(" ").map((word) => {
    const wordWithIndex = { word, startIndex: cumulativeIndex };
    cumulativeIndex += word.length + 1; // +1 for the space character
    return wordWithIndex;
  });
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100vh",
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001F54] text-[#FEFCFB] select-none"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,130,162,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6 text-center">
        {/* Circular Loading Animation */}
        <div className="relative w-16 h-16 flex items-center justify-center mb-8">
          <motion.div
            className="absolute w-16 h-16 border-4 border-t-[#1282A2] border-r-transparent border-b-[#1282A2]/30 border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <motion.div
            className="absolute w-12 h-12 border-4 border-b-[#FEFCFB] border-t-transparent border-r-[#FEFCFB]/30 border-l-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>

        {/* Animated text with Sekuya font (wrapped word-by-word for responsiveness) */}
        <div className="flex flex-wrap justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal font-['Sekuya'] tracking-wider gap-x-[0.3em] gap-y-2 max-w-full">
          {wordsWithIndices.map(({ word, startIndex }, wordIndex) => (
            <span key={wordIndex} className="flex overflow-hidden whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: (startIndex + charIndex) * 0.05,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;

