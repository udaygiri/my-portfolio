import { motion } from "framer-motion";
import {
    Code2,
    Terminal,
    Database,
    BrainCircuit,
    Cloud,
    ShieldCheck,
    Cpu,
    Globe,
    LayoutPanelTop
} from "lucide-react";

function Skills() {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="w-8 h-8 text-[#1282A2]" />,
            skills: ["Python", "JavaScript", "SQL"]
        },
        {
            title: "Frontend Technologies",
            icon: <LayoutPanelTop className="w-8 h-8 text-[#1282A2]" />,
            skills: ["React.js", "Next.js"]
        },
        {
            title: "Backend Technologies",
            icon: <Terminal className="w-8 h-8 text-[#1282A2]" />,
            skills: ["Django", "Flask", "FastAPI"]
        },
        {
            title: "Databases",
            icon: <Database className="w-8 h-8 text-[#1282A2]" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
        },
        {
            title: "Data Science & AI",
            icon: <BrainCircuit className="w-8 h-8 text-[#1282A2]" />,
            skills: ["Pandas", "NumPy", "Scikit-learn"]
        },
        {
            title: "Cloud & Tools",
            icon: <Cloud className="w-8 h-8 text-[#1282A2]" />,
            skills: ["Git", "GitHub", "Docker", "AWS", "REST APIs", "JWT", "Render", "Cloudinary"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section className="bg-[#0A1128] text-[#FEFCFB] min-h-screen py-24 px-4 sm:px-8 md:px-20 lg:px-40 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center justify-between gap-6"
            >
                <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 font-[Oswald]">Skills</h2>
                </div>
                <div className="flex items-center gap-3 text-[#1282A2]">
                    <div className="p-3 bg-[#001F54]/40 rounded-xl border border-[#1282A2]/30">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="p-3 bg-[#001F54]/40 rounded-xl border border-[#1282A2]/30">
                        <Cpu className="w-6 h-6" />
                    </div>
                    <div className="p-3 bg-[#001F54]/40 rounded-xl border border-[#1282A2]/30">
                        <Globe className="w-6 h-6" />
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="bg-[#001F54]/30 border border-[#1282A2]/20 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-[#1282A2]/50 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-[#0A1128] rounded-xl border border-[#1282A2]/30">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">
                                {category.title}
                            </h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIndex) => (
                                <motion.span
                                    key={sIndex}
                                    whileHover={{ y: -2 }}
                                    className="px-4 py-2 bg-[#034078]/50 border border-[#1282A2]/20 rounded-lg text-sm font-medium hover:bg-[#1282A2]/20 hover:border-[#1282A2] transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}



export default Skills;
