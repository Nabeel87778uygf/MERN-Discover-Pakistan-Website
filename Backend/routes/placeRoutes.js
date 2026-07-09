import express from 'express';
import { getAllPlaces } from '../controllers/placeController.js';

const router = express.Router();

router.get('/', getAllPlaces);

export default router;