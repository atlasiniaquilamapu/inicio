import React, { useEffect, useRef } from 'react';
import './Home.css';

const Team = () => {
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
  
  // Datos del equipo
  const teamData = [
    {
      name: 'Dra. Carolina Vega',
      position: 'Directora de Investigación',
      bio: 'Especialista en genética vegetal con más de 15 años de experiencia en mejoramiento de cultivos.',
      image: '/images/team/person1.jpg'
    },
    {
      name: 'Dr. Andrés Martínez',
      position: 'Investigador Principal',
      bio: 'Experto en manejo de recursos hídricos y adaptación al cambio climático en agricultura.',
      image: '/images/team/person2.jpg'
    },
    {
      name: 'Ing. Marta Rojas',
      position: 'Coordinadora de Transferencia Tecnológica',
      bio: 'Especialista en transferencia de conocimientos y tecnologías al sector productivo.',
      image: '/images/team/person3.jpg'
    }
  ];

  return (
    <section className="team-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Conoce a los profesionales detrás del Atlas Inia Quilamapu
          </p>
        </div>
        
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div 
              className="team-card" 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="team-image">
                <div className="image-placeholder" style={{ backgroundImage: `url(${member.image})` }}></div>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-icon" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <a href="/pagina3" className="team-button">
            Conoce a Todo el Equipo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;