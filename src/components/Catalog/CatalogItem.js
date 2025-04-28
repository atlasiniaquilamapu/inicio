// src/components/Catalog/CatalogItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CatalogItem.css'; // Make sure to create this CSS file

const CatalogItem = ({ item }) => {
  if (!item) {
    return null; // Handle case where item is undefined
  }
  
  return (
    <div className="catalog-item">
      <Link to={`/catalogo/${item.id}`} className="catalog-item-link">
        <div className="catalog-item-image">
          <img src={item.image} alt={item.title} />
          <div className="catalog-item-category">{item.category}</div>
        </div>
        <div className="catalog-item-content">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CatalogItem;