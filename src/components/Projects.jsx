import { useEffect } from 'react'
import '../styles/Projects.css'

const Projects = ({isBackend, setIsBackend}) => {
    const handleBackEnd = () => { 
        setIsBackend(true)
       }

    const handleFrontEnd = () => { 
        setIsBackend(false)
        }
 
    useEffect(() => { 
    }, [isBackend])
    
  return (
    <div id='projects'>
        <article className='projects-container'>
            <h2 className='projects-title'>Proyectos</h2>
            <h3 className='projects-section_title flex-container'>
                    <p className={isBackend ? 'backend-title_border' : 'backend-title'} onClick={handleBackEnd}>Proyectos Back-End</p>
                    <p className={isBackend ? 'frontend-title' : 'frontend-title_border'} onClick={handleFrontEnd}>Proyectos Front-End</p>
            </h3>
             {
                isBackend ? (
                    <section className='projects-section flex-container'>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/api-rest.webp" alt="image api rest" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>CRUD De Usuarios</h4>
                        <p className='projects-card_description'>
                            Esta fue la primer API REST que desarrollé en Express Js en la cual realizé un CRUD básico para un Modelo de usuarios utilizando la siguientes tecnologías: <span className='projects-card_span'>Node Js, Express Js, Sequelize, Javascript y PostgreSQL.</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/api-crud">Repositorio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/api-rest.webp" alt="image api rest" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>API Con Verificación De Usuarios</h4>
                        <p className='projects-card_description'>
                            En esta API cuando un usuario se registra recibe un email para verificar su correo y asi poder iniciar sesión en la aplicación.Las tecnologías y librerías utilizadas en esta API son : <span className='projects-card_span'>Node Js, Express Js, Sequelize, Javascript, PostgreSQL, Bcrypt, Jsonwebtoken y Nodemailer.</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/verify-user-api">Repositorio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/api-rest.webp" alt="image api rest" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>API Con Relaciones & Testing</h4>
                        <p className='projects-card_description'>
                            En esta API REST cree relaciones n:n (muchos a muchos) entre los diferentes modelos.Además hice un test para cada contolador de los modelos.Las tecnologías y librerías utilizadas en esta API son: <span className='projects-card_span'>Node Js, Express Js, Sequelize, Javascript, PostgreSQL, Jest y Supertest.</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/movies_api">Repositorio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/api-rest.webp" alt="image api rest" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>API De Hoteles</h4>
                        <p className='projects-card_description'>
                            Esta es la API REST más completa que he dasarrollado hasta ahora ya que incluye relaciones, testing, encriptación de contraseñas y manejo de tokens .Las tecnologías y librerias utilizadas en esta API son: <span className='projects-card_span'>Node Js, Express Js, Sequelize, Javascript, PostgreSQL, Jest, Supertest, Bcrypt y Jsonwebtoken.</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/movies_api">Repositorio</a>
                            </button>
                            <button className='projects-card_btn'>
                            <a className='projects-card_ancore' href="https://github.com/AlexSmart9/movies_api">Documentación</a>
                        </button>
                        </div>
                    </div>
                </div>
            </section>
                ) : (
            <section className='projects-section flex-container'>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/pokedex.webp" alt="image api rest" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>Aplicación Web Pokedex</h4>
                        <p className='projects-card_description'>
                            En esta aplicación web se tiene que introducir un nombre de entrenador para poder acceder a todos los pokemons con su respectiva información. Y se utilizaron las siguientes tecnologías: <span className='projects-card_span'>React, HTML, CSS, Redux, React Router Dom, Axios y Javascript</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/pokedex-webapp">Repositorio</a>
                            </button>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://pokedex-five-iota-49.vercel.app/">Ir al sitio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/r&m.webp" alt="image rick & morty webapp" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>Aplicación Web Rick & Morty</h4>
                        <p className='projects-card_description'>
                            Esta aplicación web muestra las localizaciones de la serie Rick & Morty asi como su población y cada habitante con su respectiva información. Las tecnologías empleadas en este proyecto son: <span className='projects-card_span'>React, HTML, CSS, Axios y Javascript</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/rick---morty">Repositorio</a>
                            </button>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://rick-and-morty-locations-delta.vercel.app/">Ir al sitio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/weather.webp" alt="image weather-app" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>Aplicación Web Del Clima</h4>
                        <p className='projects-card_description'>
                            Esta aplicación web muestra el clima en la ubicación del usuario, así mismo se puede buscar y ver el clima de diferentes localizaciones del mundo. En este proyecto se utilizaron las siguientes tecnologías: <span className='projects-card_span'>React, HTML, CSS, Axios y Javascript</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/weather-app">Repositorio</a>
                            </button>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://what-is-the-weather.vercel.app/">Ir al sitio</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='projects-card flex-container'>
                    <img className='projects-card_img' src="/img/galleta.webp" alt="image fortune cookie webapp" />
                    <div className='projects-card_body'>
                        <h4 className='projects-card_title'>Aplicación Web Galleta De La Fortuna</h4>
                        <p className='projects-card_description'>
                            Esta fué la primer aplicación web que hice en React en ella aprendí a usar hooks como useState y useEffect es un sitio que renderiza las frases y backgrounds de manera random.Las tecnologías empleadas en este proyecto son: <span className='projects-card_span'>React, HTML, CSS y Javascript</span>
                        </p>
                        <div className='projectscard-btn_container flex-container'>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://github.com/AlexSmart9/Galleta-de-la-fortuna">Repositorio</a>
                            </button>
                            <button className='projects-card_btn'>
                                <a className='projects-card_ancore' href="https://galleta-de-la-fortuna-black.vercel.app/">Ir al sitio</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
                )
             }
        </article>
    </div>
  )
}

export default Projects