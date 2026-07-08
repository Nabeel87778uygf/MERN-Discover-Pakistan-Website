import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('en');

    return (
        <div
            className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'}`}
            style={{ direction: language === 'ur' ? 'rtl' : 'ltr' }}
        >
            <Navbar
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                language={language}
                setLanguage={setLanguage}
            />

            {/* React automatically injects children components here */}
            <main>
                {React.Children.map(children, child =>
                    React.cloneElement(child, { isDarkMode, language })
                )}
            </main>

            <Footer isDarkMode={isDarkMode} language={language} />
        </div>
    );
};

export default MainLayout;