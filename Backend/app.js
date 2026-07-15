import express from "express";
import cors from "cors";
import placeRoutes from "./routes/placeRoutes.js";
import contactRoutes from "./routes/contact.routes.js";
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Pakistan Tourism API is running successfully",
    });
});

// API Routes
app.use("/api/places", placeRoutes);
app.use("/api/contacts", contactRoutes);

// 404 Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

export default app;