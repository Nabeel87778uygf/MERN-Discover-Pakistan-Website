import transporter from "../config/mailer.js";

export const sendContactEmail = async ({
    name,
    email,
    message,
}) => {

    await transporter.sendMail({

        from: `"Discover Pakistan" <${process.env.EMAIL_USER}>`,

        to: process.env.EMAIL_RECEIVER,

        subject: "📩 New Contact Message",

        html: `
            <div style="font-family:Arial,sans-serif">

                <h2>New Contact Form Submission</h2>

                <hr/>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>

            </div>
        `
    });

};