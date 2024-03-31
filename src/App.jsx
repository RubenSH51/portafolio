import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Studies from './sections/Studies'
import WorkExperience from './sections/WorkExperience'
import Projects from './sections/Projects'
import Interests from './sections/Interests'
import Contact from './sections/Contact'
import SocialMedia from './sections/SocialMedia'
// import Modal from './components/Modal'


function App() {
  // const [showModal, setShowModal] = useState(false);


  return (
  
    <>
      {/* {showModal && <Modal />} */}
      <header>
        <Navbar />
      </header>

      <main>
        <AboutMe />
        <Studies 
          // showModal={showModal}
          // setShowModal={setShowModal}
          />
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
