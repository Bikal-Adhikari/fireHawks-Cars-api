import express from "express";
import { Parser } from "json2csv";
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

router.get("/export", async (req, res, next) => {
  try {
    const carsSnapshot = await Car.get();
    if (carsSnapshot.empty) {
      throw new Error("No cars found in the database");
    }

    const cars = carsSnapshot.docs.map((doc) => ({
      name: doc.data().name,
      mpg: doc.data().mpg,
      cylinders: doc.data().cylinders,
      displacement: doc.data().displacements,
      horsepower: doc.data().horsepower,
      weight: doc.data().weight,
      acceleration: doc.data().acceleration,
      model_year: doc.data().model_year,
      origin: doc.data().origin,
    }));

    const fields = [
      "name",
      "mpg",
      "cylinders",
      "displacement",
      "horsepower",
      "weight",
      "acceleration",
      "model_year",
      "origin",
    ];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(cars);

    res.header("Content-Type", "text/csv");
    res.attachment("automobiles-data.csv");
    res.send(csv);
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

router.put("/:id", async (req, res, next) => {
  try {
    const carId = req.params.id;
    const carData = req.body;
    await Car.doc(carId).update(carData);
    res.status(200).json({ message: "Car updated successfully" });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const carId = req.params.id;
    await Car.doc(carId).delete();
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
