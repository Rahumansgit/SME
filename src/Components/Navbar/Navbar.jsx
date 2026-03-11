import React,{useEffect,useRef, useContext, useState} from 'react'
import './Navbar.css';
const logo = '/SME_logo_removebg.png';
import menuIcon from '../../asset/icons/menu-icon.svg';
import crossIcon from '../../asset/icons/cross.svg';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';

export default function Navbar() {
  
  const navRef = useRef();
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div ref={navRef} className="navbar">
        <Link to="/">
          <div className="nav-left">
              <img src={logo} alt="Logo" className="logo" />
              <span className="site-name">SME</span>
          </div>
        </Link>
        <div className="nav-middle">
          <ul>
            <li className={location.pathname === '/' ? 'active' : ''}><Link to="/">Home</Link></li>
{/*             <li className={location.pathname === '/Events' ? 'active' : ''}><Link to="/Events">Events</Link></li>
            <li className={location.pathname === '/Projects' ? 'active' : ''}><Link to="/Projects">Projects</Link></li> */}
            <li className={location.pathname === '/Resources' ? 'active' : ''}><Link to="/Resources">Resources</Link></li>
            <li className={location.pathname === '/Alumini' ? 'active' : ''}><Link to="/Alumini">Alumini Connect</Link></li>
            <li className={location.pathname === '/About' ? 'active' : ''}><Link to="/About">About</Link></li>
            <li className={location.pathname === '/OBs' ? 'active' : ''}><Link to="/OBs">Office Bearers</Link></li>
            <li className={location.pathname === '/Contact' ? 'active' : ''}><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="nav-right">
            <span onClick={toggleTheme} className={`theme-toggle-button ${theme}`} style={{gap: '4px'}}>
                <span className="theme-text">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                <span className="theme-symbol">{theme === 'dark' ? '☼' : '☾'}</span>
            </span>
            <button className="join-button"><Link to="/Join">Join Us</Link></button>
            <button className="hamburger-menu-btn" onClick={toggleMenu}>
              <img src={menuIcon} alt="Menu" />
            </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        
        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <button className="mobile-close-btn" onClick={closeMenu}>
              <img src={crossIcon} alt="Close" />
            </button>
          </div>
          <div className="mobile-menu-content">
            <ul className="mobile-nav-links">
              <li className={location.pathname === '/' ? 'active' : ''}><Link to="/" onClick={closeMenu}>Home</Link></li>
{/*               <li className={location.pathname === '/Events' ? 'active' : ''}><Link to="/Events" onClick={closeMenu}>Events</Link></li>
              <li className={location.pathname === '/Projects' ? 'active' : ''}><Link to="/Projects" onClick={closeMenu}>Projects</Link></li> */}
              <li className={location.pathname === '/Resources' ? 'active' : ''}><Link to="/Resources" onClick={closeMenu}>Resources</Link></li>
              <li className={location.pathname === '/Alumini' ? 'active' : ''}><Link to="/Alumini" onClick={closeMenu}>Alumini Connect</Link></li>
              <li className={location.pathname === '/About' ? 'active' : ''}><Link to="/About" onClick={closeMenu}>About</Link></li>
              <li className={location.pathname === '/OBs' ? 'active' : ''}><Link to="/OBs" onClick={closeMenu}>Office Bearers</Link></li>
              <li className={location.pathname === '/Contact' ? 'active' : ''}><Link to="/Contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

