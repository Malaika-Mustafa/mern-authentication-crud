const express = require('express');
const bcrypt = require('bcrypt');
const FormDataModel = require('../models/FormData');

const router = express.Router();
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await FormDataModel.findOne({ email });
        if (existingUser) {
            return res.json("Already registered");
        }

        // ✅ Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        const newUser = new FormDataModel({ name, email, password: hashedPassword });
        await newUser.save();
        console.log("User registered successfully");

        res.json("Success");
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await FormDataModel.findOne({ email });
        console.log("User found:", user); // ✅ Debugging

        if (!user) {
            console.log("No user found for email:", email);
            return res.status(404).json({ message: "No records found!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password Match:", isMatch); // ✅ Debugging

        if (!isMatch) {
            console.log("Incorrect password for email:", email);
            return res.status(400).json({ message: "Wrong password" });
        }

        res.json({ message: "Success" });
    } catch (err) {
        console.error("Server error:", err);
        res.status(500).json({ error: "Server error" });
    }
});


module.exports = router;
