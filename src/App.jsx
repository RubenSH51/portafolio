import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Education from './sections/Education'
import WorkExperience from './sections/WorkExperience'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Contact from './sections/Contact'
import SocialMedia from './sections/SocialMedia'
import Skills from './sections/Skills'
import OngoingStudies from './sections/OngoingStudies'


function App() {

  return (
  
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <AboutMe />
        <Education />
        <Skills />
        <OngoingStudies />
        <WorkExperience />
        <Projects />
        <Interests />
      </main>


      <footer>
        <Contact />
        <SocialMedia />
      </footer>
    </>
  )
}

export default App
