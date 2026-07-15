import React, { useState } from "react";
import axios from "axios";

const Contact = ({ isDarkMode, language }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:8000/api/contacts",
                formData
            );

            alert(res.data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Something went wrong."
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            id="contact"
            className={`py-20 border-t ${isDarkMode
                ? "bg-zinc-900 border-zinc-800"
                : "bg-gray-50 border-gray-100"
                }`}
        >
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-black text-center mb-4">
                    {language === "en"
                        ? "Get In Touch"
                        : "رابطہ فارم"}
                </h2>

                <p className="text-center opacity-70 mb-12 max-w-md mx-auto text-sm">
                    {language === "en"
                        ? "Have questions about traveling to Pakistan? Drop us a message."
                        : "پاکستان کی سیر کے بارے میں سوالات ہیں؟ ہمیں پیغام بھیجیں۔"}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className={`p-8 rounded-2xl shadow-lg max-w-lg mx-auto ${isDarkMode ? "bg-zinc-800" : "bg-white"
                        }`}
                >
                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            className={`w-full px-4 py-3 rounded-xl border ${isDarkMode
                                ? "bg-zinc-700 border-zinc-600 text-white"
                                : "bg-gray-50 border-gray-300"
                                }`}
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-sm font-bold mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                            className={`w-full px-4 py-3 rounded-xl border ${isDarkMode
                                ? "bg-zinc-700 border-zinc-600 text-white"
                                : "bg-gray-50 border-gray-300"
                                }`}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">
                            Message
                        </label>

                        <textarea
                            rows="4"
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    message: e.target.value,
                                })
                            }
                            className={`w-full px-4 py-3 rounded-xl border ${isDarkMode
                                ? "bg-zinc-700 border-zinc-600 text-white"
                                : "bg-gray-50 border-gray-300"
                                }`}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;