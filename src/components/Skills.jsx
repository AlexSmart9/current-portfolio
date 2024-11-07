import '../styles/Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
        <section className='skills-section'>
            <h2 className='skills-title'>Habilidades y tecnologias</h2>
            <p className='skills-description'>En el área del Back-End soy capaz de crear APIs Rest Full utilizando la arquitectura modelo vista controlador (MVC) mediante tecnologías como: <span className='skills-span'>PostgreSQL (Sistema de gestión de bases de datos), Node Js (Entorno de ejecución), Express (Framework) y Sequelize (ORM).</span>Además, también se utilizar librerías como <span  className='skills-span'>Jsonwebtoken, Bcrypt, Nodemailer, Jest y Supertest.</span>Y, por último, también tengo conocimientos en el área del Front-End utilizando tecnologías como: <span className='skills-span'>Html (Lenguaje de marcado de hipertexto), Css (Hojo de estilos en cascada), React.(Framework), Redux y React Router Dom (librerías).</span></p>
            <span className='skills-subtitle'>Tecnologías y librerías</span>
                <ul className='skills-img_list grid-container'>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/Javascript.webp" alt="" />
                        <p className='skills-img_text'>Javascript</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/node.webp" alt="node js" />
                        <p className='skills-img_text'>Node Js</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/express.webp" alt="Express Js" />
                        <p className='skills-img_text'>Express Js</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/public/img/sequelize.webp" alt="" />
                        <p className='skills-img_text'>Sequelize</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/public/img/jsonwebtoken.webp" alt="" />
                        <p className='skills-img_text'>Jsonwebtoken</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/postgresql.webp" alt="" />
                        <p className='skills-img_text'>PostgreSQL</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/jest.webp" alt="" />
                        <p className='skills-img_text'>Jest</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/Bcrypt.webp" alt="" />
                        <p className='skills-img_text'>Bcrypt</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/supertest.webp" alt="" />
                        <p className='skills-img_text'>Supertest</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/nodemailer.webp" alt="" />
                        <p className='skills-img_text'>Nodemailer</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/Html.webp" alt="" />
                        <p className='skills-img_text'>Html</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/Css.webp" alt="" />
                        <p className='skills-img_text'>Css</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/React.webp" alt="" />
                        <p className='skills-img_text'>React</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/Redux.webp" alt="" />
                        <p className='skills-img_text'>Redux</p>
                    </li>
                    <li className='skills-img_items flex-container'>
                        <img className='skills-img' src="/img/React-router.webp" alt="" />
                        <p className='skills-img_text'>React Router Dom</p>
                    </li>
                </ul>
        </section>
    </div>
  )
}

export default Skills