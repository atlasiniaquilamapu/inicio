import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para detectar el scroll y cambiar el estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Función para alternar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/inicio" className="logo">
              <img src="./images/logo.png" alt="Atlas Inia Quilamapu" />
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle" 
            aria-label="Menú"
            onClick={toggleMobileMenu}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li><Link to="/inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
              <li><Link to="/catalogo" onClick={() => setMobileMenuOpen(false)}>Catálogo Digital</Link></li>
              <li><Link to="/pagina1" onClick={() => setMobileMenuOpen(false)}>Investigación</Link></li>
              <li><Link to="/pagina2" onClick={() => setMobileMenuOpen(false)}>Recursos</Link></li>
              <li><Link to="/pagina3" onClick={() => setMobileMenuOpen(false)}>Equipo</Link></li>
              <li><Link to="/pagina4" onClick={() => setMobileMenuOpen(false)}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;