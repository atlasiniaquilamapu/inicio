// src/context/CatalogContext.js
import React, { createContext, useState, useEffect } from 'react';
import catalogData from '../data/catalogData';

// Create the context with a default value
export const CatalogContext = createContext({
  catalog: [],
  filters: { category: 'all', search: '' },
  filterCatalog: () => {}
});

export const CatalogProvider = ({ children }) => {
  const [catalog, setCatalog] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    search: ''
  });

  // Load catalog data on component mount
  useEffect(() => {
    // Simulating data fetch
    setCatalog(catalogData);
  }, []);

  // Función para filtrar el catálogo
  const filterCatalog = (category, searchTerm) => {
    setFilters({
      category: category || filters.category,
      search: searchTerm !== undefined ? searchTerm : filters.search
    });
  };

  // Valor del contexto
  const value = {
    catalog,
    filters,
    filterCatalog
  };

  return (
    <CatalogContext.Provider value={value}>
      {children}
    </CatalogContext.Provider>
  );
};