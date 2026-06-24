import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

function Certifications() {
    const certificationsList = [
        {
            title: "Google AI Agents Intensive Program",
            organization: "Google",
            date: "December 2025"
        },
        {
            title: "Python Basic Certificate",
            organization: "HackerRank",
            date: "November 2024"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="bg-gradient-to-b from-[#001F54] to-[#0A1128] text-[#FEFCFB] py-24 px-4 sm:px-8 md:px-20 lg:px-40 overflow-hidden relative">
            {/* Background glowing decorations */}
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#1282A2]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#034078]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-[Oswald]">
                    Certifications
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            >
                {certificationsList.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="bg-[#001F54]/30 border border-[#1282A2]/20 rounded-2xl p-5 md:p-8 backdrop-blur-md hover:border-[#1282A2]/50 hover:bg-[#001F54]/40 transition-all flex flex-col justify-between shadow-xl group relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1282A2] to-transparent" />
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-[#0A1128] rounded-xl border border-[#1282A2]/30 shadow-inner group-hover:border-[#1282A2]/60 transition-colors">
                                    <Award className="w-8 h-8 text-[#1282A2]" />
                                </div>
                                <span className="text-xs uppercase tracking-wider text-[#1282A2] bg-[#1282A2]/10 border border-[#1282A2]/25 px-3 py-1 rounded-full font-semibold">
                                    Verified
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-[#1282A2] transition-colors leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-lg text-gray-300 font-medium mb-4">
                                {cert.organization}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#1282A2]/10 text-sm text-gray-400">
                            <Calendar className="w-4 h-4 text-[#1282A2]" />
                            <span>Issued: {cert.date}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Certifications;
