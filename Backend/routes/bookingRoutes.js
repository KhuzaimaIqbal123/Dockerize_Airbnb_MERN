import express from 'express';
import dotenv from 'dotenv';
import Booking from '../models/Booking.js'

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World");
});
     

router.post('/bookings', async (req, res) => {
    try {

        console.log(req.body);

        const {userId, propertyId, propertyTitle, startDate, nights, totalPrice } = req.body;
        console.log(userId);


        const newBooking = new Booking({
            userId,
            propertyId,
            propertyTitle,
            startDate,
            nights,
            totalPrice,
        });


        await newBooking.save();
        console.log("Booking Saved Successfully");

        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });

    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking' });
    }
});

export default router;  