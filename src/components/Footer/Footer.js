import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  // Obtener el año actual para los derechos de autor
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/images/logo.png" alt="Atlas Inia Quilamapu" />
              </div>
              <p className="footer-description">
                Investigación e innovación para el desarrollo agrícola sustentable de Chile. Un proyecto de INIA Quilamapu.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/INIAQuilamapu/?locale=es_LA" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/INIAQuilamapu" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/iniaquilamapu/?hl=es" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@iniaquilamapu498" className="social-link" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Enlaces Rápidos</h3>
              <ul className="footer-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/catalogo">Catálogo Digital</Link></li>
                <li><Link to="/pagina1">Investigación</Link></li>
                <li><Link to="/pagina2">Recursos</Link></li>
                <li><Link to="/pagina3">Equipo</Link></li>
                <li><Link to="/pagina4">Contacto</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Recursos</h3>
              <ul className="footer-links">
                <li><a href="#">Publicaciones</a></li>
                <li><a href="#">Informes Técnicos</a></li>
                <li><a href="#">Bases de Datos</a></li>
                <li><a href="#">Metodologías</a></li>
                <li><a href="#">Herramientas</a></li>
                <li><a href="#">Biblioteca Digital</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Contacto</h3>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Av. Vicente Méndez 515, Chillán, Chile</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+56 42 2206800</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>contacto@iniaquilamapu.cl</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Lunes a Viernes: 9:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} Atlas Inia Quilamapu. Todos los derechos reservados.
          </p>
          <ul className="footer-policy">
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Mapa del Sitio</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;