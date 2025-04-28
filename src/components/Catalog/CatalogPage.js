// src/pages/CatalogPage.js
import React, { useState, useEffect } from 'react';
import './CatalogPage.css';

const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    image: false,
    mainText: false,
    additionalText: false
  });
  
  // Datos del catálogo en formato revista (usando la misma imagen para todas las páginas)
  const catalogPages = [
    {
      id: 1,
      title: "Atlas de Suelos Agrícolas",
      content: "Los suelos de la región de Biobío presentan una diversidad ideal para diferentes cultivos agrícolas. Este estudio detallado muestra las características principales de cada zona y sus aplicaciones óptimas.",
      image: "/images/hero-background.jpg",
      additionalText: "Este atlas proporciona información detallada sobre las propiedades físicas y químicas de los suelos en diferentes zonas agrícolas de la región."
    },
    {
      id: 2,
      title: "Cultivos Estacionales Recomendados",
      content: "La planificación de cultivos según la temporada es esencial para maximizar el rendimiento. Este análisis presenta opciones ideales para cada período del año en la región.",
      image: "/images/hero-background.jpg",
      additionalText: "Cada temporada ofrece condiciones únicas que benefician determinados cultivos. Utilice esta guía para optimizar su planificación anual."
    },
    {
      id: 3,
      title: "Variedades Mejoradas INIA",
      content: "Las variedades desarrolladas por INIA Quilamapu ofrecen mayor resistencia a enfermedades y adaptabilidad a condiciones locales.",
      image: "/images/hero-background.jpg",
      additionalText: "Nuestros investigadores trabajan constantemente en el desarrollo de nuevas variedades que respondan a los desafíos de la agricultura moderna."
    },
    {
      id: 4,
      title: "Tecnologías de Riego Eficiente",
      content: "El uso eficiente del agua es un aspecto crítico para la agricultura sustentable. Estas tecnologías permiten optimizar el recurso hídrico.",
      image: "/images/hero-background.jpg",
      additionalText: "Los sistemas modernos de riego pueden reducir el consumo de agua hasta en un 60% manteniendo o incluso mejorando el rendimiento de los cultivos."
    },
    {
      id: 5,
      title: "Control Biológico de Plagas",
      content: "Las alternativas biológicas para el control de plagas representan una opción más sustentable y amigable con el medio ambiente.",
      image: "/images/hero-background.jpg",
      additionalText: "El control biológico reduce la dependencia de productos químicos y promueve el equilibrio natural de los ecosistemas agrícolas."
    },
    {
      id: 6,
      title: "Agricultura de Precisión",
      content: "Las nuevas tecnologías permiten una gestión más precisa de los cultivos, optimizando recursos y maximizando rendimientos.",
      image: "/images/hero-background.jpg",
      additionalText: "La implementación de sensores, drones y sistemas GPS ha revolucionado la forma en que se monitorean y gestionan los cultivos modernos."
    }
  ];
  
  const totalPages = catalogPages.length;
  
  // Función para activar las animaciones secuenciales al estilo Canva
  const triggerAnimations = () => {
    setVisibleElements({
      title: false,
      image: false,
      mainText: false,
      additionalText: false
    });
    
    // Secuencia de animación para cada elemento
    setTimeout(() => setVisibleElements(prev => ({ ...prev, title: true })), 100);
    setTimeout(() => setVisibleElements(prev => ({ ...prev, image: true })), 600);
    setTimeout(() => setVisibleElements(prev => ({ ...prev, mainText: true })), 1100);
    setTimeout(() => setVisibleElements(prev => ({ ...prev, additionalText: true })), 1600);
  };
  
  // Activar animaciones al inicio y al cambiar de página
  useEffect(() => {
    triggerAnimations();
  }, [currentPage]);
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1 && !isAnimating) {
      setIsAnimating(true);
      
      // Animación de salida
      setVisibleElements({
        title: false,
        image: false,
        mainText: false,
        additionalText: false
      });
      
      // Cambiar página después de la animación de salida
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      
      // Animación de salida
      setVisibleElements({
        title: false,
        image: false,
        mainText: false,
        additionalText: false
      });
      
      // Cambiar página después de la animación de salida
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  const goToPage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < totalPages && !isAnimating && pageNumber !== currentPage) {
      setIsAnimating(true);
      
      // Animación de salida
      setVisibleElements({
        title: false,
        image: false,
        mainText: false,
        additionalText: false
      });
      
      // Cambiar página después de la animación de salida
      setTimeout(() => {
        setCurrentPage(pageNumber);
        setIsAnimating(false);
      }, 500);
    }
  };
  
  // Gesto de deslizar para dispositivos táctiles
  const [touchStart, setTouchStart] = useState(null);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Si el deslizamiento es significativo (más de 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Deslizar a la izquierda
        goToNextPage();
      } else {
        // Deslizar a la derecha
        goToPrevPage();
      }
    }
    
    setTouchStart(null);
  };
  
  return (
    <div className="digital-catalog-container">
      <h1 className="catalog-title">Atlas Inia Quilamapu - Catálogo Digital</h1>
      
      <div className="digital-magazine">
        <div className="page-controls left">
          <button 
            className="page-arrow"
            onClick={goToPrevPage}
            disabled={currentPage === 0 || isAnimating}
          >
            &#8249;
          </button>
        </div>
        
        <div 
          className="magazine-content"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="magazine-page">
            <h2 className={`page-title ${visibleElements.title ? 'animate-in' : 'hidden'}`}>
              {catalogPages[currentPage].title}
            </h2>
            
            <div className="page-layout">
              <div className={`page-image ${visibleElements.image ? 'animate-in-image' : 'hidden-image'}`}>
                <img 
                  src={catalogPages[currentPage].image} 
                  alt={catalogPages[currentPage].title} 
                />
              </div>
              
              <div className="page-text">
                <p className={`main-content ${visibleElements.mainText ? 'animate-in-text' : 'hidden-text'}`}>
                  {catalogPages[currentPage].content}
                </p>
                <p className={`additional-content ${visibleElements.additionalText ? 'animate-in-additional' : 'hidden-additional'}`}>
                  {catalogPages[currentPage].additionalText}
                </p>
              </div>
            </div>
            
            <div className="page-number">
              Página {currentPage + 1} de {totalPages}
            </div>
          </div>
        </div>
        
        <div className="page-controls right">
          <button 
            className="page-arrow"
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1 || isAnimating}
          >
            &#8250;
          </button>
        </div>
      </div>
      
      <div className="page-navigation">
        {catalogPages.map((_, index) => (
          <button 
            key={index}
            className={`page-dot ${currentPage === index ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          />
        ))}
      </div>
      
      <div className="catalog-thumbnails">
        {catalogPages.map((page, index) => (
          <div 
            key={index} 
            className={`thumbnail ${currentPage === index ? 'active' : ''}`}
            onClick={() => goToPage(index)}
          >
            <img src={page.image} alt={page.title} />
            <span className="thumbnail-title">{page.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;