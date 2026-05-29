import '../styles/Header.css';
import { useState } from 'react';
import head_logo from '../assets/logos/header_logo.svg';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleScroll = (e) => {

        e.preventDefault();

        const targetPage = e.currentTarget.getAttribute('href');
        const targetEle = document.querySelector(targetPage);

        if (targetEle) {

            targetEle.scrollIntoView({

                behavior: 'smooth',
                block: 'start'

            });
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
                <a href="#about" onClick={handleScroll}>Home</a>
                <a href="#projects" onClick={handleScroll}>Projects</a>
                <a href="#skills" onClick={handleScroll}>Skills</a>
                <a href="#organizations" onClick={handleScroll}>Organizations</a>
                <a href="#school" onClick={handleScroll}>School Life</a>
                <a href="#contact" onClick={handleScroll}>Contact</a>
            </nav>

        </header>
    );
}