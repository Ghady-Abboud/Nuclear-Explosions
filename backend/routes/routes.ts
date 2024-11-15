import { Router } from "express";
import calculateRadius from "../src/controllers/blastRadius";
import data from "../../data/data.json";

const router = Router();
const calculate_radius = new calculateRadius(data);

router.use('/calculate-radius', calculate_radius.RadiusCalculation);

export default router;