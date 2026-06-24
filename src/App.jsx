import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import About from "./Components/About"
import Hero from "./Components/Hero"
import Experience from "./Components/Experience"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Education from "./Components/Education"
import Certifications from "./Components/Certifications"
import Contact from "./Components/Contact"
import Cursor from "./Components/Cursor"
import Loader from "./Components/Loader"
import { ReactLenis } from 'lenis/react'


function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <ReactLenis root>
        <Cursor />
        <Hero /> 
        <About /> 
        <Education />
        <Experience /> 
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </ReactLenis>
    </>
  )
}

export default App

