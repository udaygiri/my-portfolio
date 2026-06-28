import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Mic, ListTodo, Download, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const Github = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const CARD_WIDTH = 380;
const CARD_GAP = 24;

const projects = [
    {
        title: "Blink Fetch",
        type: "Download Manager",
        badge: "New",
        icon: <Download className="w-8 h-8 text-[#1282A2]" />,
        description: "A lightning-fast, multi-threaded download manager with a beautiful modern dark GUI. Splits files into parallel chunks for up to 4x speed, auto-detects filenames and sizes, and intelligently categorizes downloads into typed folders.",
        technologies: ["Python", "CustomTkinter", "Threading", "Requests", "Inno Setup", "pyproject.toml"],
        link: "https://github.com/udaygiri/Blink-Fetch-Download-Manager",
        featured: true,
        stats: [
            { label: "Threads", value: "4x" },
            { label: "Categories", value: "8" },
            { label: "Language", value: "Python" },
        ],
    },
    {
        title: "Dwarkesh Event",
        type: "Full Stack Event Management",
        icon: <CalendarDays className="w-8 h-8 text-[#1282A2]" />,
        description: "A robust event management platform built with Django and PostgreSQL. Features secure authentication, event scheduling, role-based access, and Cloudinary-powered media management. Deployed and live on Render.",
        technologies: ["Django", "PostgreSQL", "Cloudinary", "Render", "HTML", "CSS", "JavaScript"],
        link: "https://github.com/udaygiri/dwarkesh-events",
        stats: [
            { label: "Backend", value: "Django" },
            { label: "Database", value: "PG" },
            { label: "Deploy", value: "Render" },
        ],
    },
    {
        title: "AIDEX",
        type: "Voice-Activated Assistant",
        icon: <Mic className="w-8 h-8 text-[#1282A2]" />,
        description: "A Python-based virtual assistant that automates OS-level tasks and browser operations through real-time voice commands. Streamlines daily technical workflows with intelligent voice-triggered automation scripts.",
        technologies: ["Python", "Speech Recognition", "Automation Scripts", "OS Integration"],
        link: "https://github.com/udaygiri/AIDEX",
        stats: [
            { label: "Interface", value: "Voice" },
            { label: "Platform", value: "Windows" },
            { label: "Core", value: "Python" },
        ],
    },
    {
        title: "Listify",
        type: "Task Management App",
        icon: <ListTodo className="w-8 h-8 text-[#1282A2]" />,
        description: "A lightweight, responsive task management web application built with Flask and SQLite. Features secure user authentication, session management, and efficient CRUD operations with minimal latency.",
        technologies: ["Flask", "SQLite", "Python", "HTML", "CSS"],
        link: "https://github.com/udaygiri/Listify",
        stats: [
            { label: "Backend", value: "Flask" },
            { label: "DB", value: "SQLite" },
            { label: "Auth", value: "JWT" },
        ],
    },
];

function ProjectCard({ proj, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH }}
            className={`
                relative flex flex-col rounded-2xl p-7 select-none
                border transition-all duration-300 group
                ${proj.featured
                    ? "bg-[#001F54]/50 border-[#1282A2]/50 shadow-[0_0_30px_rgba(18,130,162,0.12)]"
                    : "bg-[#001F54]/30 border-[#1282A2]/20 hover:border-[#1282A2]/45 hover:bg-[#001F54]/40"
                }
            `}
        >
            
            {/* Top row — icon + github */}
            <div className="flex items-start justify-between mb-5">
                <div className={`
                    p-3 rounded-xl border shadow-inner w-fit
                    transition-colors duration-300
                    ${proj.featured
                        ? "bg-[#0A1128] border-[#1282A2]/50"
                        : "bg-[#0A1128] border-[#1282A2]/30 group-hover:border-[#1282A2]/55"
                    }
                `}>
                    {proj.icon}
                </div>

                <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-[#1282A2] bg-[#0A1128]/70 border border-[#1282A2]/15
                               hover:border-[#1282A2]/50 rounded-xl transition-all hover:scale-105 flex items-center justify-center"
                    title="View on GitHub"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>

            {/* Type badge */}
            <span className="text-[11px] uppercase tracking-wider text-[#1282A2] bg-[#1282A2]/10
                             border border-[#1282A2]/25 px-3 py-1 rounded-full font-semibold inline-block w-fit mb-4">
                {proj.type}
            </span>

            {/* Title */}
            <h3 className={`
                text-2xl font-bold tracking-tight mb-3 transition-colors duration-200
                ${proj.featured ? "text-[#1282A2]" : "text-[#FEFCFB] group-hover:text-[#1282A2]"}
            `}>
                {proj.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#FEFCFB]/75 leading-relaxed mb-6 flex-1">
                {proj.description}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-5">
                {proj.stats.map((s, i) => (
                    <div key={i} className="bg-[#0A1128]/60 border border-[#1282A2]/15 rounded-xl p-2.5 text-center">
                        <p className="text-[#1282A2] text-sm font-bold">{s.value}</p>
                        <p className="text-[#FEFCFB]/45 text-[10px] uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                ))}
            </div>

            {/* Tech tags + link */}
            <div className="border-t border-[#1282A2]/10 pt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                    {proj.technologies.map((tech, i) => (
                        <span key={i}
                            className="text-xs px-2.5 py-1 bg-[#034078]/40 border border-[#1282A2]/20 rounded-lg text-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-[#1282A2] text-xs font-semibold
                               hover:gap-2.5 transition-all duration-200 group/link"
                >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>View on GitHub</span>
                </a>
            </div>
        </motion.div>
    );
}

function Projects() {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const updateScrollState = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 10);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
        const idx = Math.round(el.scrollLeft / (CARD_WIDTH + CARD_GAP));
        setActiveIndex(Math.min(idx, projects.length - 1));
    }, []);

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener("scroll", updateScrollState, { passive: true });
        return () => el.removeEventListener("scroll", updateScrollState);
    }, [updateScrollState]);

    const scrollTo = (dir) => {
        const el = scrollRef.current;
        if (!el) return;
        const amount = CARD_WIDTH + CARD_GAP;
        el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
    };

    const scrollToIndex = (i) => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollTo({ left: i * (CARD_WIDTH + CARD_GAP), behavior: "smooth" });
    };

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };
    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        scrollRef.current.scrollLeft = scrollLeft - (x - startX);
    };
    const onMouseUp = () => setIsDragging(false);

    return (
        <section className="bg-gradient-to-b from-[#0A1128] to-[#001F54] text-[#FEFCFB] py-24 overflow-hidden relative">
            {/* BG glows */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#1282A2]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/5 w-80 h-80 bg-[#034078]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="px-4 sm:px-8 md:px-20 lg:px-40 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
                >
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 font-[Oswald]">
                            Projects
                        </h2>
                        <p className="text-[#FEFCFB]/50 text-base">
                            {projects.length} projects — drag or use arrows to explore
                        </p>
                    </div>

                    {/* Arrow controls */}
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={() => scrollTo("left")}
                            disabled={!canScrollLeft}
                            aria-label="Previous project"
                            className={`
                                p-3 rounded-xl border transition-all duration-200
                                ${canScrollLeft
                                    ? "border-[#1282A2]/40 text-[#1282A2] hover:bg-[#1282A2]/10 hover:border-[#1282A2]/70 cursor-pointer"
                                    : "border-[#1282A2]/15 text-[#1282A2]/25 cursor-not-allowed"
                                }
                            `}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => scrollTo("right")}
                            disabled={!canScrollRight}
                            aria-label="Next project"
                            className={`
                                p-3 rounded-xl border transition-all duration-200
                                ${canScrollRight
                                    ? "border-[#1282A2]/40 text-[#1282A2] hover:bg-[#1282A2]/10 hover:border-[#1282A2]/70 cursor-pointer"
                                    : "border-[#1282A2]/15 text-[#1282A2]/25 cursor-not-allowed"
                                }
                            `}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll track */}
            <div
                ref={scrollRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                className={`
                    flex gap-6 overflow-x-auto scrollbar-hide
                    pl-4 sm:pl-8 md:pl-20 lg:pl-40 pr-16
                    ${isDragging ? "cursor-grabbing" : "cursor-grab"}
                `}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {projects.map((proj, i) => (
                    <ProjectCard key={i} proj={proj} index={i} />
                ))}
                {/* Trailing spacer */}
                <div style={{ minWidth: 1 }} />
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2.5 mt-10">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        aria-label={`Go to project ${i + 1}`}
                        className={`
                            rounded-full transition-all duration-300
                            ${i === activeIndex
                                ? "w-6 h-2.5 bg-[#1282A2]"
                                : "w-2.5 h-2.5 bg-[#1282A2]/25 hover:bg-[#1282A2]/50"
                            }
                        `}
                    />
                ))}
            </div>

            {/* Scroll hint — fades out on first scroll */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: canScrollLeft ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-2 mt-6 text-[#FEFCFB]/30 text-xs pointer-events-none"
            >
                <ChevronRight className="w-3.5 h-3.5 animate-bounce-x" />
                <span>Scroll to explore</span>
                <ChevronRight className="w-3.5 h-3.5 animate-bounce-x" />
            </motion.div>
        </section>
    );
}

export default Projects;