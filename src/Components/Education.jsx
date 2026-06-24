import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

function Education() {
    const educationData = {
        university: "Dr. Subhash University",
        degree: "Bachelor of Technology in Information Technology",
        duration: "2022 – 2026",
        cgpa: "7.14",
        location: "Junagadh, Gujarat"
    };

    return (
        <section className="bg-gradient-to-b from-[#034078] to-[#001F54] text-[#FEFCFB] py-24 px-4 sm:px-8 md:px-20 lg:px-40 overflow-hidden relative">
            {/* Background glowing decorations */}
            <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#1282A2]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-[#034078]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 font-[Oswald]">
                    Education
                </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-[#001F54]/30 border border-[#1282A2]/20 rounded-2xl p-6 md:p-10 backdrop-blur-md hover:border-[#1282A2]/50 hover:bg-[#001F54]/40 transition-colors shadow-2xl relative overflow-hidden group"
                >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1282A2] to-[#034078]" />

                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                            <div className="p-4 bg-[#0A1128] rounded-2xl border border-[#1282A2]/30 shadow-inner group-hover:border-[#1282A2]/60 transition-colors shrink-0">
                                <GraduationCap className="w-10 h-10 text-[#1282A2]" />
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight mb-2 group-hover:text-[#1282A2] transition-colors">
                                    {educationData.university}
                                </h3>
                                <p className="text-lg sm:text-xl font-medium text-gray-200 mb-4">
                                    {educationData.degree}
                                </p>
                                
                                <div className="flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-300">
                                    <div className="flex items-center gap-1.5 bg-[#0A1128]/40 px-3 py-1.5 rounded-lg border border-[#1282A2]/10">
                                        <Calendar className="w-4 h-4 text-[#1282A2]" />
                                        <span>{educationData.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-[#0A1128]/40 px-3 py-1.5 rounded-lg border border-[#1282A2]/10">
                                        <MapPin className="w-4 h-4 text-[#1282A2]" />
                                        <span>{educationData.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CGPA Badge */}
                        <div className="flex md:flex-col items-center justify-between md:justify-center md:items-end gap-3 shrink-0 w-full md:w-auto">
                            <div className="flex items-center gap-1.5 text-[#1282A2] md:mb-1">
                                <Award className="w-5 h-5" />
                                <span className="text-xs uppercase tracking-wider font-semibold">Academic Score</span>
                            </div>
                            <div className="text-right">
                                <span className="text-3xl sm:text-4xl font-extrabold text-[#FEFCFB] md:bg-[#1282A2]/20 md:border md:border-[#1282A2]/40 md:px-4 md:py-2 md:rounded-xl inline-block">
                                    {educationData.cgpa} <span className="text-base sm:text-lg font-normal text-gray-300">CGPA</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
