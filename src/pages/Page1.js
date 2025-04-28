import React, { useEffect, useState, useRef } from 'react';
import './Pages.css';

const Page1 = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Datos de los proyectos de investigación
  const projects = [
    {
      id: 1,
      title: 'Mejoramiento Genético de Cereales',
      category: 'Genética y Mejoramiento',
      image: '/images/research/project1.jpg',
      description: 'Desarrollo de variedades de trigo, avena y cebada con mayor rendimiento, resistencia a enfermedades y adaptación al cambio climático para la zona centro-sur de Chile.',
      goals: [
        'Obtener variedades con resistencia genética a enfermedades fúngicas',
        'Mejorar la tolerancia a sequía y altas temperaturas',
        'Incrementar el potencial de rendimiento en al menos un 15%',
        'Desarrollar variedades con mayor calidad nutricional'
      ],
      team: 'Dr. Carlos Muñoz, Dra. María Silva, Ing. Juan Pérez',
      status: 'En curso'
    },
    {
      id: 2,
      title: 'Agricultura de Precisión',
      category: 'Tecnología Agrícola',
      image: '/images/research/project2.jpg',
      description: 'Implementación y validación de tecnologías de agricultura de precisión para optimizar el uso de recursos y reducir el impacto ambiental en sistemas productivos de la región.',
      goals: [
        'Desarrollar sistemas de monitoreo de cultivos mediante drones y sensores remotos',
        'Optimizar el uso de agua y fertilizantes mediante aplicación variable',
        'Reducir en un 30% el uso de agroquímicos',
        'Incrementar la eficiencia energética en los sistemas productivos'
      ],
      team: 'Ing. Ana Martínez, Dr. Roberto González, Ing. Patricia Vega',
      status: 'En curso'
    },
    {
      id: 3,
      title: 'Biodiversidad Agrícola',
      category: 'Sustentabilidad',
      image: '/images/research/project3.jpg',
      description: 'Estudio y conservación de la biodiversidad agrícola local, incluyendo variedades nativas y especies subutilizadas con potencial económico y adaptativo.',
      goals: [
        'Identificar y caracterizar variedades nativas de cultivos tradicionales',
        'Establecer un banco de germoplasma regional',
        'Evaluar el potencial comercial de especies subutilizadas',
        'Desarrollar estrategias de conservación in situ'
      ],
      team: 'Dra. Laura Soto, Ing. Felipe Rojas, Téc. Camila Díaz',
      status: 'Finalizado'
    },
    {
      id: 4,
      title: 'Adaptación al Cambio Climático',
      category: 'Sustentabilidad',
      image: '/images/research/project4.jpg',
      description: 'Desarrollo y validación de estrategias de adaptación al cambio climático para los principales sistemas productivos de la región, con énfasis en gestión del agua y resistencia a eventos extremos.',
      goals: [
        'Modelar escenarios climáticos futuros a escala regional',
        'Evaluar vulnerabilidad de los sistemas productivos actuales',
        'Desarrollar estrategias de adaptación específicas por cultivo',
        'Implementar sistemas de alerta temprana para eventos extremos'
      ],
      team: 'Dr. Sergio Valdés, Dra. Carolina Muñoz, Ing. Diego Lagos',
      status: 'En curso'
    }
  ];
  
  // Efecto para desplazarse al inicio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Efecto para animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Investigación</h1>
          <p className="page-description">
            Descubre nuestros proyectos de investigación dedicados a mejorar la agricultura chilena
            a través de innovación, sustentabilidad y desarrollo tecnológico.
          </p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="research-overview">
            <div className="section-header">
              <h2 className="section-title">Líneas de Investigación</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="research-lines">
              <div className="research-line">
                <div className="line-icon">🌾</div>
                <h3>Mejoramiento Genético</h3>
                <p>Desarrollo de variedades adaptadas a las condiciones agroclimáticas de Chile, con énfasis en rendimiento, calidad y resistencia.</p>
              </div>
              
              <div className="research-line">
                <div className="line-icon">🔬</div>
                <h3>Biotecnología Agrícola</h3>
                <p>Aplicación de técnicas biotecnológicas para caracterización, conservación y mejoramiento de recursos genéticos vegetales.</p>
              </div>
              
              <div className="research-line">
                <div className="line-icon">🌱</div>
                <h3>Sustentabilidad</h3>
                <p>Desarrollo de prácticas agrícolas sostenibles, adaptación al cambio climático y uso eficiente de recursos naturales.</p>
              </div>
              
              <div className="research-line">
                <div className="line-icon">📱</div>
                <h3>Tecnología e Innovación</h3>
                <p>Aplicación de nuevas tecnologías para la agricultura de precisión, monitoreo de cultivos y procesamiento agroindustrial.</p>
              </div>
            </div>
          </section>
          
          <section className="research-projects" ref={sectionRef}>
            <div className="section-header">
              <h2 className="section-title">Proyectos Destacados</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className={`projects-showcase ${isVisible ? 'visible' : ''}`}>
              <div className="projects-list">
                {projects.map((project, index) => (
                  <div 
                    key={project.id}
                    className={`project-item ${index === activeProject ? 'active' : ''}`}
                    onClick={() => setActiveProject(index)}
                  >
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                ))}
              </div>
              
              <div className="project-details">
                {projects[activeProject] && (
                  <>
                    <div className="project-image">
                      <img src={projects[activeProject].image} alt={projects[activeProject].title} />
                      <div className="project-status">{projects[activeProject].status}</div>
                    </div>
                    
                    <div className="project-content">
                      <h2 className="project-name">{projects[activeProject].title}</h2>
                      <p className="project-description">{projects[activeProject].description}</p>
                      
                      <div className="project-goals">
                        <h3>Objetivos</h3>
                        <ul>
                          {projects[activeProject].goals.map((goal, index) => (
                            <li key={index}>{goal}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="project-meta">
                        <div className="meta-item">
                          <span className="meta-label">Equipo:</span>
                          <span className="meta-value">{projects[activeProject].team}</span>
                        </div>
                        <div className="meta-item">
                          <span className="meta-label">Estado:</span>
                          <span className="meta-value">{projects[activeProject].status}</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
          
          <section className="research-publications">
            <div className="section-header">
              <h2 className="section-title">Publicaciones Recientes</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="publications-list">
              <div className="publication-item">
                <div className="publication-year">2024</div>
                <div className="publication-content">
                  <h3 className="publication-title">Respuesta de variedades de trigo a condiciones de sequía en la zona centro-sur de Chile</h3>
                  <p className="publication-authors">Muñoz C., Silva M., Pérez J.</p>
                  <p className="publication-journal">Revista Chilena de Investigación Agrícola, 45(2), 112-128</p>
                  <a href="#" className="publication-link">Ver publicación</a>
                </div>
              </div>
              
              <div className="publication-item">
                <div className="publication-year">2023</div>
                <div className="publication-content">
                  <h3 className="publication-title">Aplicación de tecnologías de agricultura de precisión para optimización del riego en cultivos de maíz</h3>
                  <p className="publication-authors">Martínez A., González R., Vega P.</p>
                  <p className="publication-journal">Agrociencia, 57(4), 329-345</p>
                  <a href="#" className="publication-link">Ver publicación</a>
                </div>
              </div>
              
              <div className="publication-item">
                <div className="publication-year">2023</div>
                <div className="publication-content">
                  <h3 className="publication-title">Caracterización genética y nutricional de variedades nativas de papas en la región de La Araucanía</h3>
                  <p className="publication-authors">Soto L., Rojas F., Díaz C.</p>
                  <p className="publication-journal">Agricultura Técnica, 83(1), 67-82</p>
                  <a href="#" className="publication-link">Ver publicación</a>
                </div>
              </div>
            </div>
            
            <div className="publications-cta">
              <a href="#" className="publication-button">Ver Todas las Publicaciones</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page1;