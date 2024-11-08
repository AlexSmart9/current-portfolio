import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <div id='about me'>
        <section className='about-me_container flex-container'>
            <div>
            <h1 className='about-me_title'>Desarrollador Web Back-End</h1>
            <h2 className='about-me_name'>Alejandro Martínez</h2>
            </div>
            <p className='about-me_description'>
                ¡Hola! Soy Alejandro, un apasionado desarrollador web back-end, y aunque esta es mi especialidad, también tengo bases muy sólidas en el área del front-end. Mi flexibilidad me permite adaptarme a cualquier cambio. Soy determinado y puntual, cumpliendo rigurosamente con los plazos establecidos. Además, soy una persona que muy difícilmente se da por vencido, ya que para mí cada reto es una oportunidad para crecer y aprender. Con mi actitud proactiva, estoy listo para enfrentar y superar cualquier desafío.
            </p>
            <button className='about-me_btn'>
                <a href="/img/Cv.png" download='CV Alejandro Martinez'>Descargar CV</a>
            </button>
        </section>
    </div>
  )
}

export default AboutMe