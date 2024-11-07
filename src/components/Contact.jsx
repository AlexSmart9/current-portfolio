import { useRef } from 'react';
import '../styles/Contact.css'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o0jb0xr', 'template_h7w8ndt', form.current, {
        publicKey: 'kyII3IhUNFWbsBQH0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id='contact' className="contact-section">
        <h2 className='contact-title'>Contacto</h2>
        <div className='contact-info_container grid-container'>
            <div className='contact-info_items'>
                <h3 className='contact-info_subtitle'>Información de contacto</h3>
                <p className='contact-info_text'>Póngase en contacto conmigo mediante cualquiera de los siguientes medios o utilizando el formulario.</p>
                <div className="contact-info">
                    <i className="contact-info_whatsap bx bxl-whatsapp"></i>    
                    <span className="contact-info_item">
                      <a href="https://wa.me/+524331006851?text=Hola soy un reclutador" target="_blank"
                        rel="noreferrer nofollow">Enviar WhatsApp</a>
                    </span>
                </div>
                <div className="contact-info">
                    <i className="contact-info_phone bx bx-phone"></i>
                    <span className="contact-info_item">
                      <a href="tel:+52 4331006851" target="_blank" rel="noreferrer nofollow">
                        Hacer llamada telefónica
                      </a>
                    </span>
                </div>
                <div className="contact-info">
                    <i className="contact-info_email bx bxs-envelope"></i>
                    <span className="contact__info-mail">
                      <a id="mail" href="mailto:alex247martínez@outlook.es" target="_blank" rel="noreferrer nofollow">
                        Enviar correo electrónico
                      </a>
                    </span>
                </div>
            </div>
            <div className="contact-form_container">
                <form ref={form} className="contact-form flex-container" onSubmit={sendEmail}>
                    <div className="contact-form_field flex-container">
                        <label className="contact-form_label">Nombre</label>
                        <input className="contact-form_input" type="text" name='user_name' />
                    </div>
                    <div className="contact-form_field flex-container">
                        <label className="contact-form_label">Correo</label>
                        <input className="contact-form_input" type="text" name='user_email' />
                    </div>
                    <div className="contact-form_field flex-container">
                        <label className="contact-form_label">Asunto</label>
                        <input className="contact-form_input" type="text" />
                    </div>
                    <div className="contact-form_field flex-container">
                        <label className="contact-form_label">Mensaje</label>
                        <textarea className="contact-form_input" name="message" id="message" cols={'30'} rows={'10'}></textarea>
                    </div>
                    <button className="contact-form_btn">Enviar</button>
            </form>
        </div>
        </div>
    </section>
  )
}

export default Contact