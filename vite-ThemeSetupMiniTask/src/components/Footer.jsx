import React from 'react';

const Footer = ({ isDarkMode, language }) => {
    return (
        <footer className={`py-8 text-center text-sm border-t transition-colors duration-300 ${isDarkMode ? 'bg-zinc-950 text-gray-400 border-zinc-800' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <p className="font-semibold text-base text-emerald-600 mb-2">🇵🇰 Pakistan Zindabad</p>
                <p>© {new Date().getFullYear()} Discover Pakistan. All rights reserved.</p>
                <p className="mt-1 text-xs text-gray-400">Designed beautifully with React & Tailwind CSS</p>
            </div>
        </footer>
    );
};

export default Footer;