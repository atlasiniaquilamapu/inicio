// src/components/Catalog/CatalogDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './CatalogDetail.css';

const CatalogDetail = () => {
  const { id } = useParams();
  
  // Datos detallados del catálogo (en una implementación real estos vendrían de la API o contexto)
  const catalogPages = [
    {
      id: "1",
      title: "Atlas de Suelos Agrícolas",
      subtitle: "Mapa detallado de la región del Biobío",
      description: "Los suelos de la región de Biobío presentan una diversidad ideal para diferentes cultivos agrícolas. Este estudio detallado muestra las características principales de cada zona y sus aplicaciones óptimas.",
      image: "/images/catalog/soil-map.jpg",
      fullContent: `
        <h3>Características de los Suelos de la Región</h3>
        <p>La región del Biobío cuenta con una variedad de suelos que la hacen ideal para diversos cultivos. Desde suelos volcánicos altamente fértiles en las zonas cordilleranas hasta suelos aluviales en los valles centrales.</p>
        <p>Este atlas categoriza los diferentes tipos de suelo según sus propiedades físicas y químicas, incluyendo:</p>
        <ul>
          <li>Textura y estructura</li>
          <li>Contenido de materia orgánica</li>
          <li>pH y niveles de nutrientes</li>
          <li>Capacidad de retención de agua</li>
          <li>Drenaje y aireación</li>
        </ul>
        <h3>Aplicaciones Prácticas</h3>
        <p>El conocimiento detallado de los suelos permite a los agricultores tomar decisiones informadas sobre:</p>
        <ul>
          <li>Selección de cultivos apropiados para cada zona</li>
          <li>Planificación de programas de fertilización específicos</li>
          <li>Implementación de prácticas de conservación del suelo</li>
          <li>Diseño de sistemas de riego adaptados a cada tipo de suelo</li>
        </ul>
      `
    },
    // Agregar más datos detallados para cada página del catálogo
  ];
  
  // Buscar la página correspondiente al ID
  const pageDetail = catalogPages.find(page => page.id === id);
  
  if (!pageDetail) {
    return (
      <div className="catalog-detail-container">
        <h2>Detalle no encontrado</h2>
        <p>Lo sentimos, la página solicitada no existe.</p>
        <Link to="/catalogo" className="back-button">Volver al Catálogo</Link>
      </div>
    );
  }
  
  return (
    <div className="catalog-detail-container">
      <div className="detail-header">
        <h1>{pageDetail.title}</h1>
        <h3>{pageDetail.subtitle}</h3>
      </div>
      
      <div className="detail-content">
        <div className="detail-image">
          <img src={pageDetail.image} alt={pageDetail.title} />
        </div>
        
        <div className="detail-text">
          <p className="detail-description">{pageDetail.description}</p>
          <div className="detail-full-content" dangerouslySetInnerHTML={{ __html: pageDetail.fullContent }} />
        </div>
      </div>
      
      <div className="detail-actions">
        <Link to="/catalogo" className="back-button">Volver al Catálogo</Link>
      </div>
    </div>
  );
};

export default CatalogDetail;