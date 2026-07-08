import React from 'react';

const Home = ({ language }) => {
    const content = {
        en: {
            heroTitle: 'The Land of Pure Potential',
            heroSub: 'From the peak of K2 to the shores of Arabian Sea, explore the rich heritage, majestic landscapes, and vibrant culture of Pakistan.',
            btnExplore: 'Explore Architecture',
            secTitle: 'Key Highlights',
            card1Title: 'Majestic Peaks',
            card1Desc: 'Home to 5 of the world\'s 14 highest independent peaks, including the mighty K2.',
            card2Title: 'Rich History',
            card2Desc: 'Cradle of ancient civilizations like the Indus Valley and Gandhara.',
            card3Title: 'Hospitality',
            card3Desc: 'Ranked globally as one of the most welcoming and hospitable tourist destinations.'
        },
        ur: {
            heroTitle: 'پاک سرزمین، بے پناہ صلاحیت',
            heroSub: 'کے ٹو کی چوٹی سے لے کر بحیرہ عرب کے ساحلوں تک، پاکستان کے امیر ورثے، شاندار مناظر اور متحرک ثقافت کو دریافت کریں۔',
            btnExplore: 'فن تعمیر دریافت کریں',
            secTitle: 'اہم جھلکیاں',
            card1Title: 'شاندار چوٹیاں',
            card1Desc: 'دنیا کی 14 بلند ترین چوٹیوں میں سے 5 کا گھر، بشمول عظیم کے ٹو۔',
            card2Title: 'امیر تاریخ',
            card2Desc: 'وادی سندھ اور گندھارا جیسی قدیم تہذیبوں کا گہوارہ۔',
            card3Title: 'مہمان نوازی',
            card3Desc: 'سیاحوں کے لیے دنیا کے سب سے زیادہ خوش آئند اور مہمان نواز مقامات میں شمار ہوتا ہے۔'
        }
    };

    const data = content[language];

    return (
        <div id="home" className="pt-20">
            {/* Hero Section */}
            <div
                className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-white"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&q=80&w=1200')` }}
            >
                <div className="max-w-4xl text-center px-4">
                    <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight animate-fade-in">
                        {data.heroTitle}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        {data.heroSub}
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1">
                        {data.btnExplore}
                    </button>
                </div>
            </div>

            {/* Highlights Cards Section */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-black text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-emerald-500 after:mx-auto after:mt-4">
                    {data.secTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=500" alt="K2" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{data.card1Title}</h3>
                            <p className="opacity-80 text-sm leading-relaxed">{data.card1Desc}</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="https://images.unsplash.com/photo-1627588365636-cf0d52a233b1?auto=format&fit=crop&q=80&w=500" alt="Badshahi Mosque" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{data.card2Title}</h3>
                            <p className="opacity-80 text-sm leading-relaxed">{data.card2Desc}</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-zinc-800 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <img src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&q=80&w=500" alt="Northern Areas" className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-3">{data.card3Title}</h3>
                            <p className="opacity-80 text-sm leading-relaxed">{data.card3Desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;