import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Datos para el carrusel
  const slides = [
    {
      title: "Atlas Inia Quilamapu",
      subtitle: "Innovación en Investigación Agrícola",
      description: "Explorando el futuro de la agricultura sustentable en Chile",
      image: "./images/hero-background.jpg",
      buttonText: "Ver Catálogo Digital",
      buttonLink: "/catalogo"
    },
    {
      title: "Investigación de Excelencia",
      subtitle: "Ciencia al servicio del campo",
      description: "Desarrollo de tecnologías y conocimientos para el sector agropecuario",
      image: "./images/hero-background-2.jpg",
      buttonText: "Conoce Nuestros Proyectos",
      buttonLink: "/pagina1"
    },
    {
      title: "Transferencia Tecnológica",
      subtitle: "Del laboratorio al campo",
      description: "Implementación de soluciones innovadoras para productores agrícolas",
      image: "./images/hero-background-3.jpg",
      buttonText: "Explorar Recursos",
      buttonLink: "/pagina2"
    }
  ];

  // Efecto para cambiar automáticamente de slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Función para cambiar manualmente el slide
  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <h2 className="hero-subtitle">{slide.subtitle}</h2>
              <p className="hero-description">{slide.description}</p>
              <Link to={slide.buttonLink} className="hero-button">
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === activeSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;