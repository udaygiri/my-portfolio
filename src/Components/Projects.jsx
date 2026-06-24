import { motion } from "framer-motion";
import { CalendarDays, Mic, ListTodo } from "lucide-react";

const Github = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

function Projects() {
    const projects = [
        {
            title: "Dwarkesh Event",
            type: "Full Stack Event Management System",
            icon: <CalendarDays className="w-8 h-8 text-[#1282A2]" />,
            description: "Designed and developed a robust event management platform using Django and PostgreSQL. Implemented secure authentication, event scheduling, and media management features. Integrated Cloudinary for image storage and deployed the application on Render.",
            technologies: ["Django", "PostgreSQL", "Cloudinary", "Render", "HTML", "CSS", "JavaScript"],
            link: "https://github.com/udaygiri/dwarkesh-events"
        },
        {
            title: "AIDEX",
            type: "Voice Activated Productivity Assistant",
            icon: <Mic className="w-8 h-8 text-[#1282A2]" />,
            description: "Built a Python-based virtual assistant capable of automating system tasks and browser operations through voice commands. Enhanced productivity through intelligent workflow automation.",
            technologies: ["Python", "Speech Recognition", "Automation Scripts"],
            link: "https://github.com/udaygiri/AIDEX"
        },
        {
            title: "Listify",
            type: "Task Management Web Application",
            icon: <ListTodo className="w-8 h-8 text-[#1282A2]" />,
            description: "Developed a lightweight task management system using Flask and SQLite. Implemented secure user authentication and efficient CRUD operations.",
            technologies: ["Flask", "SQLite", "Python"],
            link: "https://github.com/udaygiri/Listify"
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
        <section className="bg-gradient-to-b from-[#0A1128] to-[#001F54] text-[#FEFCFB] py-24 px-4 sm:px-8 md:px-20 lg:px-40 overflow-hidden relative">
            {/* Background glowing decorations */}
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#1282A2]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#034078]/25 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-[Oswald]">
                    Projects
                </h2>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        className="bg-[#001F54]/30 border border-[#1282A2]/20 rounded-2xl p-5 md:p-8 backdrop-blur-md hover:border-[#1282A2]/50 hover:bg-[#001F54]/40 transition-all flex flex-col justify-between shadow-xl group"
                    >
                        <div>
                            {/* Header Section */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-[#0A1128] rounded-xl border border-[#1282A2]/30 shadow-inner group-hover:border-[#1282A2]/60 transition-colors w-fit shrink-0">
                                    {proj.icon}
                                </div>
                                {proj.link && (
                                    <a 
                                        href={proj.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-gray-300 hover:text-[#1282A2] bg-[#0A1128]/60 border border-[#1282A2]/10 hover:border-[#1282A2]/50 rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center hover:scale-105"
                                        title="View GitHub Repository"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                            </div>

                            {/* Project Type Badge */}
                            <div className="mb-4">
                                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#1282A2] bg-[#1282A2]/10 border border-[#1282A2]/25 px-3 py-1 rounded-full font-semibold inline-block">
                                    {proj.type}
                                </span>
                            </div>

                            {/* Project Information */}
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 group-hover:text-[#1282A2] transition-colors">
                                {proj.title}
                            </h3>
                            <p className="text-sm text-[#FEFCFB]/80 leading-relaxed mb-6">
                                {proj.description}
                            </p>
                        </div>

                        {/* Tech Stack Tags */}
                        <div>
                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1282A2]/10">
                                {proj.technologies.map((tech, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-xs px-2.5 py-1 bg-[#034078]/40 border border-[#1282A2]/20 rounded-lg text-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Projects;
