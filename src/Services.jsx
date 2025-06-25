import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

function Services() {
    const { t } = useTranslation('services')

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }

        const handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersect, observerOptions)

        const animatedElements = document.querySelectorAll('.service-box, .services-title, .contact-box, .contact-head, .fade-in-section')
        animatedElements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div id="services" className="services-section">
            <div className="services-container">
                <div className="services-header fade-in-section">
                    <h2>{t('title')} <span className="paslaugos">{t('titleHighlight')}</span></h2>
                    <p>{t('subtitle')}</p>
                </div>
                
                <div className="services-layout">
                    {/* Main Featured Service */}
                    <div className="service-main featured fade-in-section">
                        <div className="service-image">
                            <img src="./src/assets/ChatGPT Image Jun 24, 2025, 08_07_56 PM.png" alt={t('mounting.title')} />
                        </div>
                        <div className="service-content">
                            <h3>{t('mounting.title')}</h3>
                            <p>{t('mounting.description')}</p>
                        </div>
                    </div>

                    {/* Secondary Services */}
                    <div className="services-secondary">
                        {/* Padangų Remontas */}
                        <div className="service-main small fade-in-section delay-100">
                            <div className="service-image">
                                <img src="./src/assets/ChatGPT Image Jun 18, 2025, 01_42_07 PM.png" alt={t('repair.title')} />
                            </div>
                            <div className="service-content">
                                <h3>{t('repair.title')}</h3>
                                <p>{t('repair.description')}</p>
                            </div>
                        </div>

                        {/* Padangų Saugojimas */}
                        <div className="service-main small fade-in-section delay-200">
                            <div className="service-image">
                                <img src="./src/assets/IMG_2626.JPG" alt={t('storage.title')} />
                            </div>
                            <div className="service-content">
                                <h3>{t('storage.title')}</h3>
                                <p>{t('storage.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;