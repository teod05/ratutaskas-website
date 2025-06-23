import React, { useState, useEffect } from 'react';
import logo from './assets/Ratų-taškas_logo-1.png';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsVisible(false);
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = 100; // Height of your navbar
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div 
                className="navbar-trigger"
                onMouseEnter={handleMouseEnter}
            />
            <nav 
                className={`navbar ${isVisible ? 'visible' : ''} ${isScrolled ? 'scrolled' : ''}`}
                onMouseLeave={handleMouseLeave}
            >
                <img src={logo} alt="Logo" className="logo" />
                <ul className="nav-links">
                    <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Pagrindinis</a></li>
                    <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Paslaugos</a></li>
                    <li><a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Kontaktai</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;