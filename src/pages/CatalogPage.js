// File: src/pages/CatalogPage.js
import React, { useContext } from 'react';
import { CatalogContext } from '../context/CatalogContext';
import CatalogItem from '../components/Catalog/CatalogItem';

const CatalogPage = () => {
  const { catalog } = useContext(CatalogContext);
  
  return (
    <div className="catalog-page">
      <h1>Catálogo Digital</h1>
      <div className="catalog-grid">
        {catalog.map(item => (
          <CatalogItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;