import Navbar from './components/Navbar';
import AboutMe from './components/sections/AboutMe';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto px-4">

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

        <section id="experience" className="min-h-screen pt-20">
          <Experience />
        </section>

        <section id="contact" className="min-h-screen pt-20">
          <Contact />
        </section>

      </main>
    </div>
  )
}

export default App