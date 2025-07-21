import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({

    userId: { type: String, required:true }, 
    propertyId: { type: String, required: true },
    propertyTitle: { type: String, required: true },
    startDate: { type: String, required: true },
    nights: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    updatedBy: { type: String }, 
    
    
}, { timestamps: true }); 

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking; 




