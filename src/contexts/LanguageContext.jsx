import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('lt');

    // Force Lithuanian as default on first load
    useEffect(() => {
        if (i18n.language !== 'lt') {
            i18n.changeLanguage('lt');
        }
    }, [i18n]);

    const toggleLanguage = useCallback(() => {
        const newLang = currentLanguage === 'lt' ? 'en' : 'lt';
        i18n.changeLanguage(newLang);
        setCurrentLanguage(newLang);
    }, [currentLanguage, i18n]);

    return (
        <LanguageContext.Provider value={{ language: currentLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}; 