import '../styles/Header.css';
import { useState } from 'react';
import head_logo from '../assets/logos/header_logo.svg';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="portfolio-header">

            <div className="left-header">
                <img src={head_logo} alt="AnzCasti Logo" className="logo" />
                <span className="brand-name">casti.hanz</span>
            </div>

            <div
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <nav className={`right-header ${isMenuOpen ? 'mobile-open' : ''}`}>
                <a href="#about" onClick={closeMenu}>Home</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#organizations" onClick={closeMenu}>Organizations</a>
                <a href="#school" onClick={closeMenu}>School Life</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>

        </header>
    );
}