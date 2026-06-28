import { motion } from "framer-motion";

function About() {
    return (
        <section id="about" className="bg-[#034078] rounded-t-full text-[#FEFCFB] min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-20 lg:px-40">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-8 mt-[9rem] font-[Oswald]"
            >
                About Me
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-2xl leading-relaxed max-w-4xl"
            >
                Results-driven Software Engineer specializing in Python Backend Development 
                and RESTful API architecture. Experienced in building scalable web applications 
                using Django, Flask, and FastAPI. Strong expertise in PostgreSQL, MySQL, 
                database optimization, automation scripting, and cloud deployment. 
                Passionate about solving complex problems and developing efficient 
                backend systems that deliver exceptional performance.
            </motion.p>
        </section>
    )
}

export default About