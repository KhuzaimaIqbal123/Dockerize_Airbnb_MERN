import React from "react";
import axios from "axios"; 
import "./BookingManagement.css";

const BookingManagement = () => {
    const baseUrl = "http://localhost:3000/admin"; 
    const handleViewAllBookings = async () => {
        try {
            const response = await axios.get(`${baseUrl}/bookings`);
            console.log("Bookings:", response.data);
            alert("Bookings fetched! Check console for details.");
        } catch (error) {
            console.error("Error fetching bookings:", error);
            alert("Failed to fetch bookings.");
        }
    };

    const handleUpdateBooking = async () => {
        const bookingId = prompt("Enter the ID of the booking to update:");
        const updatedData = { status: "Updated Status" }; 

        try {
            const response = await axios.put(`${baseUrl}/bookings/${bookingId}`, updatedData);
            console.log("Updated Booking:", response.data);
            alert("Booking updated! Check console for details.");
        } catch (error) {
            console.error("Error updating booking:", error);
            alert("Failed to update booking.");
        }
    };

    const handleDeleteBooking = async () => {
        const bookingId = prompt("Enter the ID of the booking to delete:");

        try {
            const response = await axios.delete(`${baseUrl}/bookings/${bookingId}`);
            console.log("Deleted Booking:", response.data);
            alert("Booking deleted! Check console for details.");
        } catch (error) {
            console.error("Error deleting booking:", error);
            alert("Failed to delete booking.");
        }
    };

    return (
        <div className="listing">
            <button className="buto" onClick={handleViewAllBookings}>
                View All Bookings
            </button>
            <button className="buto" onClick={handleUpdateBooking}>
                Update Booking
            </button>
            <button className="buto" onClick={handleDeleteBooking}>
                Delete Booking
            </button>
        </div>
    );
};

export default BookingManagement;
