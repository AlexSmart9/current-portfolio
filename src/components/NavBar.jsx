
import '../styles/NavBar.css'

const NavBar = () => {
  const handleAboutMe = (e) => { 
    e.preventDefault()
    document.getElementById('about me').scrollIntoView({behavior:'auto'})
   }

  const handleClick = (e) => { 
    e.preventDefault()
    document.getElementById('projects').scrollIntoView({behavior:'smooth'})
   }

   const handleSkills = (e) => { 
    e.preventDefault()
    document.getElementById('skills').scrollIntoView({behavior:'smooth'})
    }

    const handleContact = (e) => { 
      e.preventDefault()
      document.getElementById('contact').scrollIntoView({behavior:'smooth'})
     }
   
  return (
    <div className='header'>
    <nav className='navbar-header'>
      <div className='navbar-img-container'>
            <img className='navbar-img' src="/img/175093506.png" alt="Alejandro Martínez" /> 
      </div>
      <div className='navbar-list_container'>
        <ul className='navbar-list flex-container'>
          <li>
            <a onClick={handleAboutMe} className='navbar-list_item' href="about me">Sobre mi</a>
          </li>
          <li>
            <a onClick={handleSkills} className='navbar-list_item' href="skills">Habilidades y tecnologias</a>
          </li>
          <li>
            <a onClick={handleClick} className='navbar-list_item' href="projects">Proyectos</a>
          </li>
          <li>
            <a onClick={handleContact} className='navbar-list_item' href="contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default NavBar