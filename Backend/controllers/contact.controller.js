import Contact from "../models/contact.js";
import { sendContactEmail } from "../services/email.service.js";

export const sendMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        // Save message to database
        const newMessage = await Contact.create({
            name,
            email,
            message,
        });

        // Send email
        await sendContactEmail({
            name,
            email,
            message,
        });

        console.log("✅ Email sent successfully");

        return res.status(201).json({
            success: true,
            message: "Message sent successfully.",
            data: newMessage,
        });

    } catch (error) {
        console.error("❌ Contact Controller Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};