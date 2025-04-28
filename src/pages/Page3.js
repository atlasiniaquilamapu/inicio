import React, { useEffect, useState, useRef } from 'react';
import './Pages.css';

const Page3 = () => {
  const [activeTab, setActiveTab] = useState('researchers');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
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
  
  // Función para cambiar de pestaña
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Datos del equipo
  const team = {
    researchers: [
      {
        id: 1,
        name: 'Dra. Carolina Vega',
        position: 'Directora de Investigación',
        description: 'Especialista en genética vegetal con más de 15 años de experiencia en mejoramiento de cultivos y desarrollo de variedades resistentes a estrés abiótico.',
        image: '/images/team/person1.jpg',
        social: {
          email: 'mailto:cvega@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      },
      {
        id: 2,
        name: 'Dr. Andrés Martínez',
        position: 'Investigador Principal',
        description: 'Experto en manejo de recursos hídricos y adaptación al cambio climático en agricultura. Lidera proyectos de optimización de riego y uso eficiente del agua.',
        image: '/images/team/person2.jpg',
        social: {
          email: 'mailto:amartinez@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      },
      {
        id: 3,
        name: 'Dra. Laura Soto',
        position: 'Investigadora Senior',
        description: 'Especialista en biodiversidad agrícola y conservación de recursos genéticos nativos. Coordina el banco de germoplasma y lidera proyectos de caracterización de especies nativas.',
        image: '/images/team/person4.jpg',
        social: {
          email: 'mailto:lsoto@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      },
      {
        id: 4,
        name: 'Dr. Sergio Valdés',
        position: 'Investigador Senior',
        description: 'Experto en modelación agroclimática y desarrollo de estrategias de adaptación al cambio climático para sistemas agrícolas vulnerables.',
        image: '/images/team/person5.jpg',
        social: {
          email: 'mailto:svaldes@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      },
      {
        id: 5,
        name: 'Dr. Carlos Muñoz',
        position: 'Investigador',
        description: 'Especialista en mejoramiento genético de cereales, con enfoque en resistencia a enfermedades y calidad nutricional. Lidera el programa de trigo y avena.',
        image: '/images/team/person6.jpg',
        social: {
          email: 'mailto:cmunoz@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      },
      {
        id: 6,
        name: 'Dra. María Silva',
        position: 'Investigadora',
        description: 'Experta en biotecnología agrícola y técnicas moleculares aplicadas al mejoramiento de cultivos. Coordina el laboratorio de biotecnología vegetal.',
        image: '/images/team/person7.jpg',
        social: {
          email: 'mailto:msilva@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/',
          researchgate: 'https://researchgate.net/'
        }
      }
    ],
    technicians: [
      {
        id: 7,
        name: 'Ing. Marta Rojas',
        position: 'Coordinadora de Transferencia Tecnológica',
        description: 'Especialista en transferencia de conocimientos y tecnologías al sector productivo. Coordina programas de extensión y vinculación con agricultores.',
        image: '/images/team/person3.jpg',
        social: {
          email: 'mailto:mrojas@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      },
      {
        id: 8,
        name: 'Ing. Felipe Rojas',
        position: 'Técnico Especialista en Recursos Genéticos',
        description: 'Responsable de la caracterización y conservación de recursos genéticos en el banco de germoplasma. Especialista en variedades nativas de cultivos andinos.',
        image: '/images/team/person8.jpg',
        social: {
          email: 'mailto:frojas@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      },
      {
        id: 9,
        name: 'Ing. Ana Martínez',
        position: 'Especialista en Agricultura de Precisión',
        description: 'Experta en implementación de tecnologías de agricultura de precisión y sistemas de monitoreo de cultivos mediante sensores y drones.',
        image: '/images/team/person9.jpg',
        social: {
          email: 'mailto:amartinez2@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      }
    ],
    administrative: [
      {
        id: 10,
        name: 'Patricia Vega',
        position: 'Directora Administrativa',
        description: 'Responsable de la gestión administrativa y financiera del centro. Coordina recursos humanos y gestión de proyectos.',
        image: '/images/team/person10.jpg',
        social: {
          email: 'mailto:pvega@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      },
      {
        id: 11,
        name: 'Roberto González',
        position: 'Coordinador de Comunicaciones',
        description: 'Encargado de la estrategia de comunicación del centro, manejo de redes sociales y difusión de resultados de investigación.',
        image: '/images/team/person11.jpg',
        social: {
          email: 'mailto:rgonzalez@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      },
      {
        id: 12,
        name: 'Camila Díaz',
        position: 'Asistente Administrativa',
        description: 'Apoyo en gestión administrativa, organización de eventos y atención a visitantes e investigadores.',
        image: '/images/team/person12.jpg',
        social: {
          email: 'mailto:cdiaz@iniaquilamapu.cl',
          linkedin: 'https://linkedin.com/'
        }
      }
    ]
  };
  
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Nuestro Equipo</h1>
          <p className="page-description">
            Conoce a los profesionales detrás del Atlas Inia Quilamapu, un grupo multidisciplinario
            dedicado a la investigación y desarrollo agrícola sustentable.
          </p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="team-overview">
            <div className="section-header">
              <h2 className="section-title">Organización</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Nuestro equipo está compuesto por investigadores, técnicos y personal administrativo
                comprometidos con el desarrollo de la agricultura chilena.
              </p>
            </div>
            
            <div className="team-structure">
              <div className="structure-image">
                {/* Imagen organizacional o espacio para diagrama */}
                <div className="image-placeholder"></div>
              </div>
              
              <div className="structure-content">
                <p>
                  El Atlas Inia Quilamapu está organizado en tres áreas principales de trabajo que actúan
                  de manera coordinada para lograr los objetivos institucionales:
                </p>
                
                <div className="structure-areas">
                  <div className="area-item">
                    <h3>Área de Investigación</h3>
                    <p>
                      Compuesta por investigadores doctores y magísteres en diversas disciplinas científicas
                      relacionadas con la agricultura, responsables de la generación de conocimiento y desarrollo
                      de tecnologías y variedades.
                    </p>
                  </div>
                  
                  <div className="area-item">
                    <h3>Área de Transferencia Tecnológica</h3>
                    <p>
                      Integrada por profesionales especialistas en extensión y transferencia, encargados
                      de llevar los resultados de la investigación al sector productivo a través de diversos
                      mecanismos y actividades.
                    </p>
                  </div>
                  
                  <div className="area-item">
                    <h3>Área Administrativa</h3>
                    <p>
                      Conformada por profesionales que dan soporte a la gestión institucional, incluyendo
                      administración, finanzas, comunicaciones y relaciones institucionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="team-members" ref={sectionRef}>
            <div className="section-header">
              <h2 className="section-title">Integrantes</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="team-tabs">
              <div className="tabs-header">
                <button 
                  className={`tab-button ${activeTab === 'researchers' ? 'active' : ''}`}
                  onClick={() => handleTabChange('researchers')}
                >
                  Investigadores
                </button>
                <button 
                  className={`tab-button ${activeTab === 'technicians' ? 'active' : ''}`}
                  onClick={() => handleTabChange('technicians')}
                >
                  Técnicos Especialistas
                </button>
                <button 
                  className={`tab-button ${activeTab === 'administrative' ? 'active' : ''}`}
                  onClick={() => handleTabChange('administrative')}
                >
                  Administrativos
                </button>
              </div>
              
              <div className={`team-grid ${isVisible ? 'visible' : ''}`}>
                {team[activeTab].map(member => (
                  <div className="team-member" key={member.id}>
                    <div className="member-image">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <div className="member-content">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-position">{member.position}</p>
                      <p className="member-description">{member.description}</p>
                      <div className="member-social">
                        {member.social.email && (
                          <a href={member.social.email} className="social-icon" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} className="social-icon" aria-label="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.social.researchgate && (
                          <a href={member.social.researchgate} className="social-icon" aria-label="ResearchGate">
                            <i className="fab fa-researchgate"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="team-join">
            <div className="join-content">
              <h2>Trabaja con Nosotros</h2>
              <p>
                Estamos constantemente en búsqueda de profesionales talentosos y comprometidos
                con el desarrollo agrícola sustentable. Conoce nuestras oportunidades laborales
                y forma parte de nuestro equipo.
              </p>
              <div className="join-buttons">
                <a href="#" className="join-button">Ver Ofertas Laborales</a>
                <a href="#" className="join-button secondary">Programa de Prácticas</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page3;