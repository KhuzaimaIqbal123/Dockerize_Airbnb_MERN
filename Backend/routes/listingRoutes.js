// import express from 'express';
// import dotenv from 'dotenv';
// import Listing from '../models/Listing';

// dotenv.config();

// const router = express.Router();

// router.get("/listings", async (req, res) => {
//     try {
//         const listings = await Listing.find();
//         res.json(listings);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching listings" });
//     }
// });

// router.post("/listings", async (req, res) => {
//     try {
//         const newListing = new Listing(req.body);
//         await newListing.save();
//         res.status(201).json(newListing);
//     } catch (error) {
//         res.status(400).json({ error: "Error creating listing" });
//     }
// });

// export default router;  
