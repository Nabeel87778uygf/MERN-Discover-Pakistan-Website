import React, { useState } from 'react';

const Contact = ({ isDarkMode, language }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className={`py-20 border-t ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-gray-50 border-gray-100'}`}>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-black text-center mb-4">
                    {language === 'en' ? 'Get In Touch' : 'رابطہ فارم'}
                </h2>
                <p className="text-center opacity-70 mb-12 max-w-md mx-auto text-sm">
                    {language === 'en' ? 'Have questions about traveling to Pakistan? Drop us a message.' : 'پاکستان کی سیر کے بارے میں سوالات ہیں؟ ہمیں پیغام بھیجیں۔'}
                </p>

                <form onSubmit={handleSubmit} className={`p-8 rounded-2xl shadow-lg max-w-lg mx-auto ${isDarkMode ? 'bg-zinc-800' : 'bg-white'}`}>
                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            required
                            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDarkMode ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-gray-50 border-gray-300'}`}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDarkMode ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-gray-50 border-gray-300'}`}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">Message</label>
                        <textarea
                            rows="4"
                            required
                            className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${isDarkMode ? 'bg-zinc-700 border-zinc-600 text-white' : 'bg-gray-50 border-gray-300'}`}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;