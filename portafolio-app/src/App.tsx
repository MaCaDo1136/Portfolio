import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import AboutMe from './components/sections/AboutMe'

function App() {
  return (
    <div>
      <Navbar />

      <main className="max-w-[95rem] mx-auto px-4">

        <section id="home" className="min-h-screen pt-20">
          <Hero />
        </section>

        <section id="about-me" className="min-h-screen pt-20">
          <AboutMe />
        </section>

        <section id="skills" className="min-h-screen pt-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen pt-20">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen pt-20">
          <Contact />
        </section>

      </main>
    </div>
  )
}

export default App