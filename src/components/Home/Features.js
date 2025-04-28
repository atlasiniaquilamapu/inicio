import React, { useEffect, useRef } from 'react';
import './Home.css';

const Features = () => {
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
  
  // Datos de las características
  const featuresData = [
    {
      icon: '📊',
      title: 'Datos Actualizados',
      description: 'Accede a la información más reciente sobre investigaciones agrícolas y desarrollo tecnológico en el sector.'
    },
    {
      icon: '🌿',
      title: 'Cultivos Sustentables',
      description: 'Conoce las técnicas más innovadoras para el desarrollo de cultivos sostenibles y amigables con el medio ambiente.'
    },
    {
      icon: '🔬',
      title: 'Investigación Avanzada',
      description: 'Descubre los últimos avances en genética vegetal, manejo de recursos y adaptación al cambio climático.'
    },
    {
      icon: '📱',
      title: 'Catálogo Interactivo',
      description: 'Explora nuestra base de datos con información detallada sobre variedades, técnicas y tecnologías desarrolladas.'
    },
    {
      icon: '🧪',
      title: 'Laboratorios Especializados',
      description: 'Contamos con laboratorios de última generación para el análisis y desarrollo de soluciones agrícolas.'
    },
    {
      icon: '🤝',
      title: 'Colaboración Internacional',
      description: 'Trabajamos con instituciones de todo el mundo para compartir conocimientos y tecnologías.'
    }
  ];

  return (
    <section className="features-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nuestras Características</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Descubre cómo el Atlas Inia Quilamapu está transformando la agricultura en Chile
          </p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="feature-cta">
          <a href="/catalogo" className="feature-button">
            Explorar Catálogo Digital
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;