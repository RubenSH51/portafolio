import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Studies from './sections/Studies'
import WorkExperience from './sections/WorkExperience'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Contact from './sections/Contact'
import SocialMedia from './sections/SocialMedia'
import Skills from './sections/Skills'
import CurrentlyStudying from './sections/CurrentlyStudying'


function App() {

  return (
  
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <AboutMe />
        <Studies />
        <Skills />
        <CurrentlyStudying />
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
