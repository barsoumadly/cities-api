import express from "express";

import {
  getCities,
  getCity,
  createCity,
  updateCity,
  deleteCity,
} from "../controllers/cityController.js";

const router = express.Router();

router.get("/cities", getCities);
router.get("/cities/:id", getCity);
router.post("/cities", createCity);
router.patch("/cities/:id", updateCity);
router.delete("/cities/:id", deleteCity);

export default router;
