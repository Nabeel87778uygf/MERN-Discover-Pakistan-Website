import React from 'react';

const Culture = ({ isDarkMode, language }) => {
    const data = {
        en: {
            title: 'A Vibrant Tapestry of Culture',
            sub: 'Explore the diverse traditions, crafts, and flavors of Pakistan\'s provinces.',
            c1Title: 'Hospitality & Values',
            c1Desc: 'Pakistani culture is world-renowned for its warmth, respect, and deep-rooted tradition of welcoming guests.',
            c2Title: 'Traditional Crafts',
            c2Desc: 'From intricate Truck Art and Peshawari Chappals to Sindhi Ajrak and Balochi embroidery.',
            c3Title: 'Rich Flavors & Cuisine',
            c3Desc: 'A rich culinary heritage featuring aromatic Biryani, juicy Kebabs, Nihari, and traditional Sajji.'
        },
        ur: {
            title: 'ثقافت کے رنگین رنگ',
            sub: 'پاکستان کے صوبوں کی متنوع روایات، دستکاری اور ذائقوں کو دریافت کریں۔',
            c1Title: 'مہمان نوازی اور اقدار',
            c1Desc: 'پاکستانی ثقافت اپنی گرمجوشی، احترام اور مہمانوں کا استقبال کرنے کی گہری روایت کے لیے دنیا بھر میں مشہور ہے۔',
            c2Title: 'روایتی دستکاری',
            c2Desc: 'پیچیدہ ٹرک آرٹ اور پشاوری چپل سے لے کر سندھی اجرک اور بلوچی کڑھائی تک۔',
            c3Title: 'امیر ذائقے اور پکوان',
            c3Desc: 'ایک بہترین کھانوں کا ورثہ جس میں خوشبودار بریانی، رسیلے کباب، نہاری اور روایتی سجی شامل ہیں۔'
        }
    }[language];

    // Dynamic styling for cards and section container
    const sectionBg = isDarkMode ? 'bg-zinc-900/20' : 'bg-emerald-50/50';
    const cardClassName = `p-8 rounded-2xl shadow-lg border text-center transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-white border-gray-100 text-zinc-900'
        }`;

    return (
        <div id="culture" className={`py-24 transition-colors duration-500 ${sectionBg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-black text-emerald-600 mb-4">{data.title}</h2>
                    <p className="opacity-70 text-lg max-w-2xl mx-auto">{data.sub}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className={cardClassName}>
                        <div className="text-4xl mb-4">🤝</div>
                        <h3 className="text-xl font-bold mb-3">{data.c1Title}</h3>
                        <p className="opacity-80 text-sm leading-relaxed">{data.c1Desc}</p>
                    </div>

                    {/* Card 2 */}
                    <div className={cardClassName}>
                        <div className="text-4xl mb-4">🎨</div>
                        <h3 className="text-xl font-bold mb-3">{data.c2Title}</h3>
                        <p className="opacity-80 text-sm leading-relaxed">{data.c2Desc}</p>
                    </div>

                    {/* Card 3 */}
                    <div className={cardClassName}>
                        <div className="text-4xl mb-4">🍲</div>
                        <h3 className="text-xl font-bold mb-3">{data.c3Title}</h3>
                        <p className="opacity-80 text-sm leading-relaxed">{data.c3Desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Culture;