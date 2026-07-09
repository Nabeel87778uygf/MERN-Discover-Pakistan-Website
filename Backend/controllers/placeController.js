import Place from '../models/PlaceModel.js';


export const getAllPlaces = async (req, res) => {
    try {
        const places = await Place.findAll(); // SQL: SELECT * FROM places;
        
        // Map data to structure expected by frontend (e.g. name_en, name_ur, image_url, etc.)
        const formattedPlaces = places.map((place) => {
            const plainPlace = place.get({ plain: true });
            return {
                ...plainPlace,
                name_en: plainPlace.name,
                name_ur: plainPlace.name, // Fallback to name since Urdu translations aren't in json
                description_en: plainPlace.description,
                description_ur: plainPlace.description, // Fallback to description
                image_url: plainPlace.image, // Map image to image_url
                history_en: "", // Fallbacks for history field
                history_ur: ""
            };
        });

        res.status(200).json(formattedPlaces);
    } catch (error) {
        res.status(500).json({ message: `SQL Server Error: ${error.message}` });
    }
};