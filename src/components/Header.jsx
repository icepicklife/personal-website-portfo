import '../styles/Header.css';
import { useState } from 'react';
import head_logo from '../assets/logos/header_logo.svg';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleScroll = (e, targetPage) => {

        e.preventDefault();

        const targetEle = document.querySelector(targetPage);

        if (targetEle) {

            const headerOffset = 80;
            
            const elementPosition = targetEle.getBoundingClientRect().top + window.scrollY;

            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({

                top: offsetPosition,
                behavior: 'smooth'

            });

            history.pushState(null, "", targetPage);
            
        }

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
                <a href="#about" onClick={(e) => handleScroll(e, "#about")}>Home</a>
                <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</a>
                <a href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</a>
                <a href="#organizations" onClick={(e) => handleScroll(e, "#organizations")}>Organizations</a>
                <a href="#school" onClick={(e) => handleScroll(e, "#school")}>School Life</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</a>
            </nav>

        </header>
    );
}