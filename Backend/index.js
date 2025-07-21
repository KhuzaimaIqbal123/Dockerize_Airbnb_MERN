import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
// import listingRoutes from './routes/listingRoutes.js';

dotenv.config();

const URI = process.env.MONGO_URI;

const app= express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
 
const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB connection established successfully");
});

connection.on("error",(err)=>{
    console.log("Error in MongoDB connection",err);
})

connection.on("disconnect",() =>{
    console.log("MongoDB connection disconnected");
});


app.use('/auth',userRoutes);
app.use('/api',bookingRoutes);
app.use('/admin',adminRoutes);
// app.use()

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});