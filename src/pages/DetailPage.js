// File: src/pages/DetailPage.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CatalogContext } from '../context/CatalogContext';
import CatalogDetail from '../components/Catalog/CatalogDetail';

const DetailPage = () => {
  const { id } = useParams();
  const { catalog } = useContext(CatalogContext);
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const foundItem = catalog.find(item => item.id === parseInt(id) || item.id === id);
    setItem(foundItem);
  }, [catalog, id]);
  
  if (!item) {
    return <div>Cargando...</div>;
  }
  
  return (
    <div className="detail-page">
      <CatalogDetail item={item} />
    </div>
  );
};

export default DetailPage;