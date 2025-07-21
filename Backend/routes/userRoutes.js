import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello World");
});


router.post("/signup", async (req, res) => {
  try {
    console.log(req.body); 

    const { username, password } = req.body;

    const existingUser = await User.findOne({ 
      username 
    });
    if (existingUser) {
      return res.status(400).send({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);

    const user = new User({
      username,
      password: hashedPassword,
    });


    await user.save();
    console.log("Saved successfully");

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/me", async (req, res) => {
  console.log("calling");
  // const { token } = req.body;

  try {

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    const isExpired = Date.now() >= decoded.exp * 1000;

    if(isExpired){
      return res.status(401).send("Token has expired"); 
    }

    const user = await User.findById(decoded.id);



    res.status(200).json({user});
    
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error" );
    }
  }); 

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ error: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    
    if (!isPasswordCorrect) {
      return res.status(400).send({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id},process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ user,token });

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

export default router;
