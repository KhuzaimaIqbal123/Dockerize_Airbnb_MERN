import express from "express";
import dotenv from "dotenv";
import Booking from "../models/Booking.js";

dotenv.config();

const router = express.Router();

// View all bookings
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// Update a booking
router.put("/bookings/:id", async (req, res) => {
  const { id } = req.params;
  const { startDate, nights, totalPrice } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { startDate, nights, totalPrice, updatedBy: "admin" },
      { new: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", updatedBooking });
  } catch (error) {
    res.status(500).json({ error: "Failed to update booking" });
  }
});

// Delete a booking
router.delete("/bookings/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
});

// Placeholder for listing management routes
router.get("/listings", (req, res) => {
  res.status(200).send("Listing management is under development!");
});

export default router;
