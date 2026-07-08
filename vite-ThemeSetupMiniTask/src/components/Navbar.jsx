import React, { useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode, language, setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);

    const translations = {
        en: { home: 'Home', history: 'History', culture: 'Culture', contact: 'Contact', brand: 'Discover Pakistan' },
        ur: { home: 'ہوم', history: 'تاریخ', culture: 'ثقافت', contact: 'رابطہ کریں', brand: 'پاکستان دریافت کریں' }
    };

    const t = translations[language];

    return (
        <nav className={`shadow-md fixed w-full top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-gray-800'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Fixed Logo: Tag changed to <a> pointing to #home */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <a
                            href="#home"
                            className="text-2xl font-black tracking-wider text-emerald-600 cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            🇵🇰 {t.brand}
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 font-medium">
                        <a href="#home" className="hover:text-emerald-500 transition-colors">{t.home}</a>
                        <a href="#history" className="hover:text-emerald-500 transition-colors">{t.history}</a>
                        <a href="#culture" className="hover:text-emerald-500 transition-colors">{t.culture}</a>
                        <a href="#contact" className="hover:text-emerald-500 transition-colors">{t.contact}</a>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 ml-4">
                            <button
                                onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                                className="px-3 py-1.5 border border-emerald-500 rounded-md text-sm font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                            >
                                {language === 'en' ? 'اردو' : 'English'}
                            </button>
                            <button
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                className="p-2 rounded-full bg-gray-200 dark:bg-zinc-700 hover:opacity-80 text-xl"
                            >
                                {isDarkMode ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <div className="md:hidden flex items-center gap-4">
                        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-xl">
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                                ) : (
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden px-4 pt-2 pb-4 space-y-3 border-t ${isDarkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-gray-50 border-gray-200'}`}>
                    <a href="#home" className="block font-medium py-2">{t.home}</a>
                    <a href="#history" className="block font-medium py-2">{t.history}</a>
                    <a href="#culture" className="block font-medium py-2">{t.culture}</a>
                    <a href="#contact" className="block font-medium py-2">{t.contact}</a>
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'ur' : 'en')}
                        className="w-full text-center py-2 bg-emerald-600 text-white rounded-md font-semibold"
                    >
                        {language === 'en' ? 'اردو' : 'English'}
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;