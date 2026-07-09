import React, { useState, useEffect } from 'react';

const CARDS_PER_PAGE = 4;

const StarRating = ({ rating }) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className={`w-4 h-4 ${i <= full ? 'text-amber-400' : i === full + 1 && half ? 'text-amber-300' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 ml-1">{rating.toFixed(1)}</span>
        </div>
    );
};

const categoryColors = {
    'Valley': 'bg-emerald-100 text-emerald-700',
    'Meadow': 'bg-green-100 text-green-700',
    'Lake': 'bg-blue-100 text-blue-700',
    'Historical': 'bg-amber-100 text-amber-700',
    'Religious': 'bg-purple-100 text-purple-700',
    'National Park': 'bg-teal-100 text-teal-700',
    'Archaeological Site': 'bg-orange-100 text-orange-700',
    'Hill Station': 'bg-lime-100 text-lime-700',
    'Beach': 'bg-cyan-100 text-cyan-700',
    'Monument': 'bg-rose-100 text-rose-700',
    'Mountain Pass': 'bg-indigo-100 text-indigo-700',
    'Desert': 'bg-yellow-100 text-yellow-700',
    'Natural Wonder': 'bg-pink-100 text-pink-700',
    'Coastal City': 'bg-sky-100 text-sky-700',
    'City': 'bg-slate-100 text-slate-700',
};

const Home = ({ language, isDarkMode }) => {
    const [allPlaces, setAllPlaces] = useState([]);
    const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);

    const content = {
        en: {
            heroTitle: 'Discover the Land of Pure',
            heroSub: 'From the peak of K2 to the shores of the Arabian Sea — explore Pakistan\'s breathtaking landscapes, rich heritage, and vibrant culture.',
            btnExplore: 'Explore Places',
            secTitle: 'Explore Destinations',
            secSub: 'Handpicked places across Pakistan waiting to be discovered',
            loadingText: 'Loading Beautiful Places...',
            errorText: 'Failed to load data. Please ensure the server is running.',
            loadMore: 'Show More Places',
            allLoaded: 'All Places Loaded',
            showing: 'Showing',
            of: 'of',
            places: 'places',
        },
        ur: {
            heroTitle: 'پاکستان کی سرزمین دریافت کریں',
            heroSub: 'کے ٹو کی چوٹی سے لے کر بحیرہ عرب کے ساحلوں تک — پاکستان کے خوبصورت مناظر، امیر ورثے اور ثقافت کو دریافت کریں۔',
            btnExplore: 'مقامات دریافت کریں',
            secTitle: 'منزلیں دریافت کریں',
            secSub: 'پاکستان بھر سے منتخب مقامات جن کا انتظار ہے',
            loadingText: 'خوبصورت مقامات لوڈ ہو رہے ہیں...',
            errorText: 'ڈیٹا لوڈ نہیں ہوا۔ سرور چلائیں۔',
            loadMore: 'مزید مقامات دکھائیں',
            allLoaded: 'تمام مقامات لوڈ ہو گئے',
            showing: 'دکھا رہے ہیں',
            of: 'میں سے',
            places: 'مقامات',
        }
    };

    const data = content[language] || content['en'];

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/places');
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setAllPlaces(result);
                setLoading(false);
            } catch (err) {
                console.error('API Fetch Error:', err);
                setError(true);
                setLoading(false);
            }
        };
        fetchPlaces();
    }, []);

    const handleLoadMore = () => {
        setLoadingMore(true);
        setTimeout(() => {
            setVisibleCount((prev) => prev + CARDS_PER_PAGE);
            setLoadingMore(false);
        }, 400);
    };

    const visiblePlaces = allPlaces.slice(0, visibleCount);
    const hasMore = visibleCount < allPlaces.length;

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4" style={{ background: isDarkMode ? '#18181b' : '#f9fafb' }}>
                <div className="flex gap-2">
                    {[0, 1, 2].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                </div>
                <p className="text-emerald-600 font-semibold text-lg">{data.loadingText}</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
                <div className="text-5xl">⚠️</div>
                <p className="text-red-500 font-semibold text-xl text-center">{data.errorText}</p>
            </div>
        );
    }

    return (
        <div id="home" className="pt-20">

            {/* ─── Hero Section ─── */}
            <div
                className="relative bg-cover bg-center h-[92vh] flex items-center justify-center text-white overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%), url('https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&q=80&w=1400')`
                }}
            >
                {/* Decorative glow orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 opacity-10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-5xl text-center px-6 z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm font-medium text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Pakistan Tourism Guide
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight leading-tight">
                        {data.heroTitle}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        {data.heroSub}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#places-section"
                            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {data.btnExplore}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#culture"
                            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Explore Culture
                        </a>
                    </div>

                    {/* Stats bar */}
                    <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
                        {[
                            { num: '30+', label: 'Destinations' },
                            { num: '4', label: 'Provinces' },
                            { num: '5', label: 'UNESCO Sites' },
                        ].map((s) => (
                            <div key={s.label} className="px-6">
                                <div className="text-3xl font-black text-emerald-400">{s.num}</div>
                                <div className="text-sm text-gray-300 mt-1">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                    </div>
                </div>
            </div>

            {/* ─── Places Grid Section ─── */}
            <div id="places-section" className={`py-24 transition-colors duration-500 ${isDarkMode ? 'bg-zinc-950' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3 bg-emerald-50 dark:bg-emerald-900/30 px-4 py-1 rounded-full">
                            Our Destinations
                        </span>
                        <h2 className={`text-4xl sm:text-5xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                            {data.secTitle}
                        </h2>
                        <p className={`text-lg max-w-xl mx-auto ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                            {data.secSub}
                        </p>

                        {/* Progress indicator */}
                        <div className={`inline-flex items-center gap-2 mt-6 text-sm font-medium px-4 py-2 rounded-full ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-white text-zinc-500'} shadow-sm`}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            {data.showing} {visiblePlaces.length} {data.of} {allPlaces.length} {data.places}
                        </div>
                    </div>

                    {/* Cards Grid — 4 columns on large screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {visiblePlaces.map((place, idx) => {
                            const nameKey = `name_${language}`;
                            const descKey = `description_${language}`;
                            const placeName = place[nameKey] || place.name || '';
                            const placeDesc = place[descKey] || place.description || '';
                            const placeImage = place.image_url || place.image || 'https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&w=800&q=80';
                            const catStyle = categoryColors[place.category] || 'bg-gray-100 text-gray-700';
                            const isNew = idx >= visibleCount - CARDS_PER_PAGE;

                            return (
                                <div
                                    key={place.id}
                                    className={`group rounded-2xl overflow-hidden shadow-lg border transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
                                        ${isDarkMode ? 'bg-zinc-900 border-zinc-800 hover:border-emerald-500/40' : 'bg-white border-gray-100 hover:border-emerald-200'}
                                        ${isNew ? 'animate-fade-in' : ''}`}
                                    style={{
                                        animation: isNew ? `fadeInUp 0.5s ease forwards ${(idx % CARDS_PER_PAGE) * 0.1}s` : 'none',
                                        opacity: isNew ? 0 : 1,
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={placeImage}
                                            alt={placeName}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&w=800&q=80';
                                            }}
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {/* Province badge */}
                                        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-lg">
                                            📍 {place.city}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        {/* Category Tag */}
                                        <span className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 ${catStyle}`}>
                                            {place.category}
                                        </span>

                                        <h3 className={`text-lg font-black mb-2 leading-tight ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                                            {placeName}
                                        </h3>

                                        <p className={`text-sm leading-relaxed mb-4 line-clamp-3 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                                            {placeDesc}
                                        </p>

                                        {/* Footer: Rating + Province */}
                                        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-zinc-800">
                                            <StarRating rating={place.rating || 4.5} />
                                            <span className={`text-xs font-medium px-2 py-1 rounded-md ${isDarkMode ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-100 text-zinc-500'}`}>
                                                {place.province?.split(' ')[0]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* ─── Load More Button ─── */}
                    <div className="flex flex-col items-center mt-14 gap-4">
                        {/* Progress bar */}
                        <div className={`w-64 h-2 rounded-full overflow-hidden ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>
                            <div
                                className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700"
                                style={{ width: `${(visiblePlaces.length / allPlaces.length) * 100}%` }}
                            />
                        </div>
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                            {visiblePlaces.length} / {allPlaces.length}
                        </p>

                        {hasMore ? (
                            <button
                                onClick={handleLoadMore}
                                disabled={loadingMore}
                                className="mt-2 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold px-10 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-emerald-500/40 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {loadingMore ? (
                                    <>
                                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Loading...
                                    </>
                                ) : (
                                    <>
                                        {data.loadMore}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        ) : (
                            <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold px-8 py-4 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {data.allLoaded}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Fade-in animation keyframe */}
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(24px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default Home;