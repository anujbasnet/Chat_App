import bcrypt from "bcrypt";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import fs from "fs";
import nodemailer from "nodemailer";
const app = express();
app.use(express.json());
app.use(cors());

app.post("/Register", async (req, res) => {
  try {
    const { Username, Email, Password, ConfirmPassword } = req.body;
    if (!Username || !Email || !Password || !ConfirmPassword) {
      return res.json({ message: "All fields are required" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      return res.json({ message: "Invalid Email format" });
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(Password)){
      return res.json({message:"Invalid Password format"})
    }
    if (Password !== ConfirmPassword) {
      return res.json({ message: "Password donot match" });
    }
    

    let data = [];
    if (fs.existsSync("./data.json")) {
      const fileContent = fs.readFileSync("./data.json", "utf-8");
      if (fileContent) {
        data = JSON.parse(fileContent);
        const emailExists = data.some((user) => user.email === Email);
        if (emailExists) {
          return res.json({ message: "Email already exists." });
        }
      }
    }
    data.push({
      username: Username,
      email: Email,
      password: Password,
    });
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
     const code = Math.floor(100000 + Math.random() * 900000).toString();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "odd1squad@gmail.com",
      pass: "snck tsrc wxni jnmr",
    },
  });
  await transporter.sendMail({
    from: "odd1squad@gmail.com",
    to: Email,
    subject: "Your Verification Code",
    html: `<p>Your 6-digit code is: <strong>${code}</strong></p>`,
  });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
 
});

app.listen(5000, () => {
  console.log("Server is running at 5000");
});
