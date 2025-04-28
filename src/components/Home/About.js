import React, { useEffect, useRef } from 'react';
import './Home.css';

const About = () => {
  const sectionRef = useRef(null);
  
  // Efecto para animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Atlas Inia Quilamapu</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Conocimiento e innovación para el desarrollo agrícola sustentable
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            {/* Imagen añadida */}
            <img src="./images/catalog/item1.jpg" alt="Atlas Inia Quilamapu" />
          </div>
          
          <div className="about-text">
            <h3>Nuestra Misión</h3>
            <p>
              El Atlas Inia Quilamapu es una iniciativa líder en investigación agrícola que busca desarrollar, adaptar y transferir tecnologías para mejorar la productividad y sostenibilidad del sector agrícola nacional. 
            </p>
            
            <h3>Visión</h3>
            <p>
              Ser un referente nacional e internacional en investigación y desarrollo agrícola, contribuyendo a la seguridad alimentaria y la adaptación al cambio climático a través de la innovación y el conocimiento científico.
            </p>
            
            <h3>Valores</h3>
            <ul className="values-list">
              <li>
                <span className="value-icon">🔬</span>
                <span className="value-text">Excelencia científica</span>
              </li>
              <li>
                <span className="value-icon">🌱</span>
                <span className="value-text">Sustentabilidad</span>
              </li>
              <li>
                <span className="value-icon">🤝</span>
                <span className="value-text">Colaboración</span>
              </li>
              <li>
                <span className="value-icon">💡</span>
                <span className="value-text">Innovación</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;