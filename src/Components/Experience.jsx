import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

function Experience() {
    const experiences = [
        {
            role: "Salesforce Trainee",
            company: "LogicRain Technologies Private Limited",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQEYdHTF-A-qgA/company-logo_100_100/company-logo_100_100/0/1651056284285/logicrain_technologies_logo?e=1782345600&v=beta&t=XbYNrTuKzmiioeWVsMHfaovJDcOi8BimbTFAY52UM20",
            location: "Ahmedabad, Gujarat",
            duration: "December 2025 – March 2026",
            achievements: [
                "Developed scalable backend logic and automation triggers.",
                "Increased operational efficiency by 30%.",
                "Optimized SOQL queries and data retrieval pipelines.",
                "Reduced page load latency and improved system performance.",
                "Developed Lightning Web Components.",
                "Integrated frontend components with enterprise backend services."
            ]
        },
        {
            role: "Data Science & Machine Learning Intern",
            company: "BrainyBeam Technologies Pvt. Ltd.",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGahJkPfWKn2w/company-logo_100_100/company-logo_100_100/0/1631330235832?e=1782345600&v=beta&t=3pjSbZSi8Rgwv5L2jj9L_3NVlBL1N-NoCycoMg5Y_To",
            location: "Ahmedabad, Gujarat",
            duration: "January 2024 – February 2024",
            achievements: [
                "Performed EDA and data cleaning using Python.",
                "Utilized Pandas and NumPy for data processing.",
                "Built Machine Learning models using Scikit-learn.",
                "Improved prediction accuracy through model optimization."
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
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
            {/* Background elements for premium feel */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1282A2]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#001F54]/30 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-[Oswald]">
                    Experience
                </h2>
            </motion.div>

            {/* Timeline container */}
            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Main Line */}
                <div className="absolute left-4 md:left-8 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#1282A2] via-[#034078] to-transparent" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12 md:pl-20">
                            {/* Timeline node */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                                className="absolute left-[5px] md:left-[21px] top-1.5 w-6 h-6 rounded-full bg-[#0A1128] border-4 border-[#1282A2] flex items-center justify-center z-10 shadow-lg shadow-[#1282A2]/25"
                            >
                                <div className="w-1.5 h-1.5 bg-[#FEFCFB] rounded-full" />
                            </motion.div>

                            {/* Experience Card */}
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="bg-[#001F54]/30 border border-[#1282A2]/20 rounded-2xl p-5 md:p-8 backdrop-blur-md hover:border-[#1282A2]/50 hover:bg-[#001F54]/40 transition-colors shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                    <div className="flex items-start gap-4">
                                        {exp.logo && (
                                            <img 
                                                src={exp.logo} 
                                                alt={`${exp.company} logo`} 
                                                className="w-12 h-12 rounded-xl object-cover border border-[#1282A2]/30 shadow-md shrink-0 bg-white"
                                            />
                                        )}
                                        <div>
                                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                                                <Briefcase className="w-5 h-5 text-[#1282A2] shrink-0" />
                                                <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">
                                                    {exp.role}
                                                </h3>
                                            </div>
                                            <span className="text-base sm:text-lg font-medium text-[#1282A2]">
                                                {exp.company}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 text-sm text-gray-300 md:mt-1">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4 text-[#1282A2]" />
                                            <span>{exp.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-[#1282A2]" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3.5">
                                    <h4 className="text-xs uppercase tracking-wider text-[#1282A2] font-semibold flex items-center gap-1.5 mb-2">
                                        <Award className="w-4 h-4" /> Key Achievements
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                        {exp.achievements.map((ach, aIdx) => (
                                            <motion.li
                                                key={aIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 + (aIdx * 0.05) }}
                                                className="flex items-start gap-2.5 text-sm text-[#FEFCFB]/90 leading-relaxed"
                                            >
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1282A2] shrink-0" />
                                                <span>{ach}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
