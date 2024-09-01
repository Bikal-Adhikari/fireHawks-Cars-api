import express from "express";
import Car from "../../config.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const carsSnapshot = await Car.get();
    const cars = carsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(cars);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    await Car.add(data);
    res.status(201).json({ message: "Car added successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
