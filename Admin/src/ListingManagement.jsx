import React from "react";
import './ListingManagement.css'

const ListingManagement = () => {
    return (
        <div className="listing">
            <button className="but">View Listings</button>
            <button className="but">Add new Listing </button>
        </div>
        );
};
export default ListingManagement;
        


// import React, { useEffect, useState } from 'react';

// function ListingManagement() {
//   const [listings, setListings] = useState([]);
//   const [newListing, setNewListing] = useState({
//     image: "",
//     title: "",
//     type: "",
//     guests: 0,
//     bedrooms: 0,
//     bathrooms: 0,
//     price: 0,
//     rating: 0,
//   });

//   const fetchListings = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/listings");
//       const data = await response.json();
//       setListings(data);
//     } catch (error) {
//       console.error("Error fetching listings:", error);
//     }
//   };

//   useEffect(() => {
//     fetchListings();
//   }, []);

//   const handleCreateListing = async (newListing) => {
//     try {
//       await fetch("http://localhost:5000/api/listings", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newListing),
//       });
//       fetchListings(); // Refresh listings
//     } catch (error) {
//       console.error("Error creating listing:", error);
//     }
//   };

//   return (
//     <div>
//   <h2>All Listings</h2>
//   {listings.map((listing) => (
//     <div key={listing._id}>
//       <h3>{listing.title}</h3>
//       <p>{listing.type}</p>
//       <p>${listing.price} / night</p>
//     </div>
//   ))}
// </div>

//   );
// }
// export default ListingManagement;
