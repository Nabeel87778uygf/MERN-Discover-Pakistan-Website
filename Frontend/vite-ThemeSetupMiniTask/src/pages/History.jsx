import React from 'react';

const History = ({ isDarkMode, language }) => {
    const data = {
        en: {
            title: 'Ancient History & Heritage',
            sub: 'Trace the roots of civilization back thousands of years.',
            era1Title: 'Indus Valley Civilization (2500 BCE)',
            era1Desc: 'One of the world\'s earliest urban settlements, featuring Mohenjo-daro and Harappa with advanced town planning.',
            era2Title: 'Gandhara Kingdom (1000 BCE)',
            era2Desc: 'The center of Buddhist learning and art, spanning across Taxila and Peshawar valley.',
            era3Title: 'The Mughal Era (1526 CE)',
            era3Desc: 'A golden age of architecture, giving Pakistan masterpieces like the Badshahi Mosque and Shalimar Gardens.'
        },
        ur: {
            title: 'قدیم تاریخ اور ورثہ',
            sub: 'ہزاروں سال پرانی تہذیب کے نقوش تلاش کریں۔',
            era1Title: 'وادی سندھ کی تہذیب (2500 قبل مسیح)',
            era1Desc: 'دنیا کی ابتدائی شہری بستیوں میں سے ایک، جس میں موہنجودڑو اور ہڑپہ کی جدید شہری منصوبہ بندی شامل ہے۔',
            era2Title: 'گندھارا سلطنت (1000 قبل مسیح)',
            era2Desc: 'بدھ مت کی تعلیم اور فن کا مرکز، جو ٹیکسلا اور وادی پشاور تک پھیلا ہوا تھا۔',
            era3Title: 'مغلیہ دور (1526 عیسوی)',
            era3Desc: 'فن تعمیر کا سنہری دور، جس نے پاکستان کو بادشاہی مسجد اور شالیمار باغ جیسے شاہکار دیے۔'
        }
    }[language];

    // Dynamic card styling based on theme state
    const cardClassName = `flex flex-col md:flex-row gap-8 items-center p-6 rounded-2xl shadow-md border transition-all duration-300 hover:-translate-y-1 ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-white border-gray-100 text-zinc-900'
        }`;

    const cardClassNameReverse = `flex flex-col md:flex-row-reverse gap-8 items-center p-6 rounded-2xl shadow-md border transition-all duration-300 hover:-translate-y-1 ${isDarkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-100' : 'bg-white border-gray-100 text-zinc-900'
        }`;

    return (
        <div id="history" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-emerald-600 mb-4">{data.title}</h2>
                <p className="opacity-70 text-lg max-w-2xl mx-auto">{data.sub}</p>
            </div>

            <div className="space-y-12">
                {/* Era 1 */}
                <div className={cardClassName}>
                    <img src="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=400" alt="Mohenjo daro" className="w-full md:w-64 h-44 object-cover rounded-xl" />
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-emerald-500">{data.era1Title}</h3>
                        <p className="opacity-80 leading-relaxed">{data.era1Desc}</p>
                    </div>
                </div>

                {/* Era 2 */}
                <div className={cardClassNameReverse}>
                    <img src="https://images.unsplash.com/photo-1569998334413-4a11f97305ce?auto=format&fit=crop&q=80&w=400" alt="Taxila" className="w-full md:w-64 h-44 object-cover rounded-xl" />
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-emerald-500">{data.era2Title}</h3>
                        <p className="opacity-80 leading-relaxed">{data.era2Desc}</p>
                    </div>
                </div>

                {/* Era 3 */}
                <div className={cardClassName}>
                    <img src="https://images.unsplash.com/photo-1590051853064-7fc1b5769202?auto=format&fit=crop&q=80&w=400" alt="Mughal Architecture" className="w-full md:w-64 h-44 object-cover rounded-xl" />
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-emerald-500">{data.era3Title}</h3>
                        <p className="opacity-80 leading-relaxed">{data.era3Desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;