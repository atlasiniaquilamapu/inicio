import React, { useEffect, useState, useRef } from 'react';
import './Pages.css';

const Page2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
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
  
  // Función para manejar clic en acordeón
  const handleAccordionClick = (id) => {
    if (activeItem === id) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };
  
  // Datos de recursos
  const resources = [
    {
      id: 1,
      title: 'Guía de Cultivos',
      description: 'Manual completo para el manejo de los principales cultivos de la zona centro-sur de Chile.',
      image: '/images/resources/resource1.jpg',
      link: '#'
    },
    {
      id: 2,
      title: 'Fichas Técnicas',
      description: 'Información detallada sobre variedades vegetales, manejos agronómicos y tecnologías desarrolladas por INIA.',
      image: '/images/resources/resource2.jpg',
      link: '#'
    },
    {
      id: 3,
      title: 'Publicaciones Científicas',
      description: 'Acceso a artículos científicos y papers publicados por nuestros investigadores en revistas nacionales e internacionales.',
      image: '/images/resources/resource3.jpg',
      link: '#'
    },
    {
      id: 4,
      title: 'Boletín Técnico',
      description: 'Publicación periódica con información actualizada sobre avances en investigación y recomendaciones para agricultores.',
      image: '/images/resources/resource4.jpg',
      link: '#'
    },
    {
      id: 5,
      title: 'Material Educativo',
      description: 'Recursos didácticos para estudiantes, profesores y extensionistas en temas de agricultura y sustentabilidad.',
      image: '/images/resources/resource5.jpg',
      link: '#'
    },
    {
      id: 6,
      title: 'Banco de Imágenes',
      description: 'Colección de fotografías de alta calidad de cultivos, plagas, enfermedades y prácticas agrícolas.',
      image: '/images/resources/resource6.jpg',
      link: '#'
    }
  ];
  
  // Datos de herramientas
  const tools = [
    {
      id: 1,
      title: 'Calculadora de Riego',
      description: 'Herramienta para calcular necesidades hídricas y programar el riego en diferentes cultivos.',
      icon: '💧'
    },
    {
      id: 2,
      title: 'Monitoreo de Plagas',
      description: 'Sistema de alerta temprana para la detección y manejo de plagas en cultivos.',
      icon: '🐞'
    },
    {
      id: 3,
      title: 'Pronóstico Agroclimático',
      description: 'Información meteorológica especializada para el sector agrícola con proyecciones estacionales.',
      icon: '☀️'
    },
    {
      id: 4,
      title: 'Calculadora de Fertilización',
      description: 'Herramienta para optimizar la aplicación de fertilizantes según cultivo y condiciones de suelo.',
      icon: '🌱'
    }
  ];
  
  // Datos de preguntas frecuentes
  const faqs = [
    {
      id: 1,
      question: '¿Cómo puedo acceder a las publicaciones científicas?',
      answer: 'Puedes acceder a nuestras publicaciones científicas a través de la sección de recursos de nuestro sitio web. Las publicaciones están disponibles en formato PDF y pueden ser descargadas gratuitamente. Para publicaciones más antiguas o específicas, puedes contactar directamente a nuestro centro de documentación.'
    },
    {
      id: 2,
      question: '¿Los recursos son de acceso gratuito?',
      answer: 'Sí, la mayoría de nuestros recursos son de acceso gratuito para el público general. Algunos materiales específicos o cursos pueden tener un costo asociado, pero siempre se indica claramente. Nuestro objetivo es que la información generada por la investigación esté disponible para todos los agricultores y profesionales del sector.'
    },
    {
      id: 3,
      question: '¿Puedo utilizar estos recursos para fines educativos?',
      answer: 'Absolutamente, nuestros recursos pueden ser utilizados para fines educativos con la adecuada citación de la fuente. De hecho, contamos con material específicamente diseñado para docentes y estudiantes. Si necesitas adaptar algún material para uso educativo, no dudes en contactarnos.'
    },
    {
      id: 4,
      question: '¿Cómo puedo solicitar capacitación sobre el uso de las herramientas digitales?',
      answer: 'Regularmente realizamos talleres y webinars sobre el uso de nuestras herramientas digitales. Puedes inscribirte a través de la sección de eventos de nuestro sitio web. También ofrecemos capacitaciones personalizadas para grupos de agricultores, cooperativas o instituciones. Contáctanos para más información.'
    },
    {
      id: 5,
      question: '¿Se pueden descargar las aplicaciones móviles?',
      answer: 'Sí, nuestras aplicaciones móviles están disponibles tanto para dispositivos Android como iOS. Puedes descargarlas gratuitamente desde Google Play Store o App Store buscando "INIA Apps". También puedes acceder a ellas a través de los enlaces directos disponibles en nuestra sección de herramientas digitales.'
    }
  ];
  
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Recursos</h1>
          <p className="page-description">
            Explora nuestra colección de recursos y herramientas para agricultores, investigadores
            y estudiantes interesados en el desarrollo agrícola sustentable.
          </p>
        </div>
      </div>
      
      <div className="page-content">
        <div className="container">
          <section className="resources-section">
            <div className="section-header">
              <h2 className="section-title">Recursos Disponibles</h2>
              <div className="section-divider"></div>
              <p className="section-subtitle">
                Accede a información técnica, publicaciones y materiales educativos desarrollados por nuestro equipo
              </p>
            </div>
            
            <div className="resources-grid">
              {resources.map(resource => (
                <div className="resource-card" key={resource.id}>
                  <div className="resource-image">
                    <img src={resource.image} alt={resource.title} />
                  </div>
                  <div className="resource-content">
                    <h3 className="resource-title">{resource.title}</h3>
                    <p className="resource-description">{resource.description}</p>
                    <a href={resource.link} className="resource-link">
                      Explorar Recurso <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="resource-tools" ref={sectionRef}>
            <div className="container">
              <div className="section-header">
                <h2 className="section-title">Herramientas Digitales</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">
                  Utiliza nuestras herramientas digitales para optimizar tus decisiones en el campo
                </p>
              </div>
              
              <div className={`tools-list ${isVisible ? 'visible' : ''}`}>
                {tools.map(tool => (
                  <div className="tool-item" key={tool.id}>
                    <div className="tool-icon">{tool.icon}</div>
                    <div className="tool-content">
                      <h3 className="tool-title">{tool.title}</h3>
                      <p className="tool-description">{tool.description}</p>
                      <a href="#" className="tool-link">
                        Acceder a la herramienta <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          <section className="faq-section">
            <div className="section-header">
              <h2 className="section-title">Preguntas Frecuentes</h2>
              <div className="section-divider"></div>
            </div>
            
            <div className="faq-accordion">
              {faqs.map(faq => (
                <div 
                  className={`faq-item ${activeItem === faq.id ? 'active' : ''}`}
                  key={faq.id}
                >
                  <div 
                    className="faq-question"
                    onClick={() => handleAccordionClick(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="faq-icon">{activeItem === faq.id ? '-' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section className="resources-cta">
            <div className="cta-content">
              <h2>¿Necesitas recursos específicos?</h2>
              <p>
                Si no encuentras lo que buscas o necesitas información específica sobre algún tema,
                no dudes en contactarnos. Nuestro equipo está disponible para ayudarte.
              </p>
              <a href="/pagina4" className="cta-button">Contactar al Equipo</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page2;