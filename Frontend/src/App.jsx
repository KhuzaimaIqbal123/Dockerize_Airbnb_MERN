import {React,useState} from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import BookingPage from "../Components/BookingPage";
import { useAuthStore } from "./store/useAuthStore";
import axios from "axios";
import { useEffect } from "react";

const App = () => {

  const { user, setUser } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleLoginBack();
  }, []);


  const handleLoginBack = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) return;
      const response = await axios.get("http://localhost:3000/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(response.data.user)
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  if(loading){
     (<div>Loading...</div>)
  }


  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking/:id" element={user ? <BookingPage /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
};
export default App;
