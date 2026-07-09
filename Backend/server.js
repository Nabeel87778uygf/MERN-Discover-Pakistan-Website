import dotenv from "dotenv";
dotenv.config();

import sequelize from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await sequelize.authenticate();

        console.log("✅ Connected to SQL Database");

        await sequelize.sync();

        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Database Connection Failed");
        console.error(error);
    }
};

startServer();