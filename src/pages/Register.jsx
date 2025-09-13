import React, { useEffect, useState } from "react";
import Github from "../assets/images/github-mark.png";
import Google from "../assets/images/Google__G__logo.svg";
import Facebook from "../assets/images/facebook.png";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const getData = async () => {
    try {
      const res = await axios.post("http://localhost:5000/Register", {
        Username,
        Email,
        Password,
        ConfirmPassword
      },);
      console.log(Username,Email,Password)
      alert(res.data.message);
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message || "Error occurred");
    }
  };
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3 className="heading">CHIT CHAT</h3>
        </div>
        <div className="FormDiv">
          <h3 className="heading">Register</h3>
          <p className="SmallFonts">Username</p>
          <input
            type="text"
            value={Username}
            placeholder="Enter your Username"
            className="inputField"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="SmallFonts">Email</p>
          <input
            type="email"
            value={Email}
            placeholder="Enter your email"
            className="inputField"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="SmallFonts">Password</p>
          <input
            value={Password}
            placeholder="Enter password"
            className="inputField"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="SmallFonts">Confirm Password</p>
          <input
            value={ConfirmPassword}
            placeholder="Confirm password"
            className="inputField"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="button"
            onClick={() => {
              getData();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
