import { useTranslation } from 'react-i18next';

function FirstPage() {
    const { t } = useTranslation('hero');

    const handleCall = () => {
        window.location.href = "tel:+37068830112";
    };

    return (
        <div id="home" className="first-page">
            <div className="first-page-text">
                <h1 className="padangu-servisas animate-heading">
                    {t('title')} 
                    <span className="klaipeda"> {t('location')}</span>
                </h1>
                <p className="turbut animate-subtext">{t('subtitle')}</p>
                <button className="skambinti animate-button" onClick={handleCall}>
                    <i className="fas fa-phone"></i> {t('callButton')}
                </button>
            </div>
            <img className="landing-photo animate-image" src="./src/assets/IMG_2624.jpg" alt="a man holding a tire" />
        </div>
    );
}

export default FirstPage;