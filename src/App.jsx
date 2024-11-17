import { useState } from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  const [isBackend, setIsBackend] = useState(true)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = (e) => { 
    setMenuIsOpen(true)
   }

  const handleCloseMenu = (e) => { 
    setMenuIsOpen(false)
   }

  return (
    <div className='app grid-container'>
      <div className='app-navbar_container'>
        <NavBar 
        menuIsOpen={menuIsOpen} 
        setMenuIsOpen={setMenuIsOpen}/>
      </div>
      <div className='body'>
        <div className='navbar-menu_container'>
          {
            menuIsOpen ? (
              <i onClick={handleCloseMenu} className='bx bx-x navbar-close_menu' ></i>
            ) : (
              <i onClick={handleMenu} className='bx bx-menu navbar-open_menu'></i>
            )
          }
        </div>
        <AboutMe/>
        <Skills/>
        <Projects isBackend={isBackend} setIsBackend={setIsBackend}/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
