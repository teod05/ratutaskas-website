import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './contexts/LanguageContext';
import logo from './assets/Ratų-taškas_logo-1.png';

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('up');
    const [activeSection, setActiveSection] = useState('home');
    const { t } = useTranslation('navbar');
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            
            // Determine scroll direction
            const direction = prevScrollPos > currentScrollPos ? 'up' : 'down';
            setScrollDirection(direction);
            setPrevScrollPos(currentScrollPos);

            // Show/hide navbar based on scroll direction and position
            setIsVisible(direction === 'up' || currentScrollPos < 100);
            setIsScrolled(currentScrollPos > 50);

            // Determine active section
            const sections = ['home', 'services', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const navbarHeight = 100;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`navbar ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''} ${scrollDirection === 'down' ? 'scrolling-down' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <div className="nav-links">
                <a 
                    href="#home" 
                    onClick={(e) => handleLinkClick(e, 'home')}
                    className={activeSection === 'home' ? 'active' : ''}
                >
                    {t('home')}
                </a>
                <a 
                    href="#services" 
                    onClick={(e) => handleLinkClick(e, 'services')}
                    className={activeSection === 'services' ? 'active' : ''}
                >
                    {t('services')}
                </a>
                <a 
                    href="#contact" 
                    onClick={(e) => handleLinkClick(e, 'contact')}
                    className={activeSection === 'contact' ? 'active' : ''}
                >
                    {t('contacts')}
                </a>
                <button
                    onClick={toggleLanguage}
                    className="language-toggle"
                >
                    {language.toUpperCase()}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;