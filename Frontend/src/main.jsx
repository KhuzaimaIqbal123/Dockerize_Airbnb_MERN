import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import Homepage from "./Homepage";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import BookingPage from "../Components/BookingPage";
import { useAuthStore } from "./store/useAuthStore";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  
  <StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StrictMode>
);
