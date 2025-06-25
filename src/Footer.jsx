import { useTranslation } from 'react-i18next';
import logo from './assets/Untitled design (1).png'

function Footer(){
    const { t } = useTranslation('footer');
    const currentYear = new Date().getFullYear();

    return(
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={logo} alt="Ratu Taskas" className="footer-logo" />
                </div>
                <div className="footer-info-section">
                    <div className="footer-contact">
                        <h3>{t('contacts')}</h3>
                        <p>+370 688 30 112</p>
                        <p>info@ratutaskas.lt</p>
                    </div>
                    <div className="footer-address">
                        <h3>{t('address')}</h3>
                        <p>Jūrininkų pr. 2, Klaipėda,</p>
                        <p>95264 Klaipėdos m. sav.</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{t('rights', { year: currentYear })}</p>
            </div>
        </div>
    )
}

export default Footer