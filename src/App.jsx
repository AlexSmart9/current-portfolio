import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [isBackend, setIsBackend] = useState(true)
  const [showInfo, setShowInfo] = useState()
  return (
    <div className='app grid-container'>
      <div className='app-navbar_container'>
        <NavBar showInfo={showInfo} setShowInfo={setShowInfo}/>
      </div>
      <div className='body'>
        <AboutMe/>
        <Skills/>
        <Projects isBackend={isBackend} setIsBackend={setIsBackend}/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
