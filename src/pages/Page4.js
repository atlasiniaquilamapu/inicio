import React, { useState, useEffect } from 'react';
import './Pages.css';

const Page4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    department: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Efecto para desplazarse al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente. Te responderemos a la brevedad.'
    });
    
    // Limpiar el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      department: ''
    });
    
    // Resetear el estado después de 5 segundos
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };
  
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-description">
            ¿Tienes preguntas o comentarios? Estamos aquí para ayudarte. Ponte en contacto
            con nuestro equipo a través de cualquiera de los canales disponibles.
          </p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="contact-info">
            <div className="section-header">
              <h2 className="section-title">Información de Contacto</h2>
              <div className="section-divider"></div>
            </div>
            
            {/* Mapa de ubicación */}
            <div className="contact-map">
              {/* Aquí iría un mapa interactivo */}
              <div className="map-placeholder"></div>
            </div>
            
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Dirección</h3>
                <p>Av. Vicente Méndez 515, Chillán, Chile</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Teléfono</h3>
                <p>+56 42 2206800</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p>contacto@iniaquilamapu.cl</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon">🕒</div>
                <h3>Horario</h3>
                <p>Lunes a Viernes: 9:00 - 17:00</p>
              </div>
            </div>
          </section>
          
          <section className="contact-form-section">
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="department">Departamento</label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione un departamento</option>
                    <option value="investigacion">Investigación</option>
                    <option value="transferencia">Transferencia Tecnológica</option>
                    <option value="administracion">Administración</option>
                    <option value="comunicaciones">Comunicaciones</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="subject">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group full-width">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="form-button">
                  Enviar Mensaje
                </button>
                
                {formStatus.submitted && (
                  <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </section>
          
          <section className="faq-shortcut">
            <div className="shortcut-content">
              <h2>Preguntas Frecuentes</h2>
              <p>
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios,
                recursos y formas de colaboración.
              </p>
              <a href="/pagina2" className="shortcut-button">Ver Preguntas Frecuentes</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page4;