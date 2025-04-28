import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Componentes principales
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Páginas
import HomePage from './pages/HomePage';
import CatalogPage from './components/Catalog/CatalogPage';
import CatalogDetail from './components/Catalog/CatalogDetail';
import Page1 from './pages/Page1'; // Investigación
import Page2 from './pages/Page2'; // Recursos
import Page3 from './pages/Page3'; // Equipo
import Page4 from './pages/Page4'; // Contacto

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/inicio" element={<HomePage />} />
            <Route path="/catalogo" element={<CatalogPage />} />
            <Route path="/catalogo/:id" element={<CatalogDetail />} />
            <Route path="/investigacion" element={<Page1 />} />
            <Route path="/recursos" element={<Page2 />} />
            <Route path="/equipo" element={<Page3 />} />
            <Route path="/contacto" element={<Page4 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;