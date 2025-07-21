import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import {useAuthStore} from '../src/store/useAuthStore';
import { useEffect } from "react";

const Login = () => {

  const {setUser} = useAuthStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      const response = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      
    } );

    // const {user} = useAuthStore();
    // console.log(user);

    localStorage.setItem("token", response.data.token);

    setUser(response.data);
    console.log(response.data);

    localStorage.setItem("userId",response.data.user._id);
    
      alert("Login successful!");
      navigate("/"); 
  } catch (error) {
    console.error(error);};
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
