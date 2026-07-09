import sequelize from "./config/db.js";
import Place from "./models/PlaceModel.js";

import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seedDatabase = async () => {
    try {
        // Connect Database
        await sequelize.authenticate();
        console.log("✅ Database Connected");

        // Create Tables
        await sequelize.sync({ force: true });
        console.log("🔄 Tables Synced Successfully");

        // Read JSON File
        const jsonPath = path.join(__dirname, "data", "places.json");

        const rawData = JSON.parse(
            fs.readFileSync(jsonPath, "utf-8")
        );

        // Convert JSON according to Model
        const formattedData = rawData.map((item) => ({
            name: item.name,
            city: item.city,
            province: item.province,
            category: item.category,
            description: item.description,
            image: item.image,
            rating: item.rating || 0,
            latitude: item.latitude || null,
            longitude: item.longitude || null,
        }));

        // Insert Data
        await Place.bulkCreate(formattedData);

        console.log(
            `🎉 ${formattedData.length} Places Inserted Successfully`
        );

        process.exit(0);

    } catch (error) {

        console.error("❌ Seeding Failed");
        console.error(error);

        process.exit(1);

    }
};

seedDatabase();