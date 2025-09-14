import React, { useEffect, useState } from "react";
import Github from "../assets/images/github-mark.png";
import Google from "../assets/images/Google__G__logo.svg";
import Facebook from "../assets/images/facebook.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Verify.css";

function Register() {
  const [code, setcode] = useState(["", "", "", "", "", ""]);
  const newCode = [...code];
  const handleChange = (text, index) => {
    newCode[index] = text;
    setcode(newCode);
    if(text && index < 5){
      inputs.current[index+1].focus(); 
    }
  };
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3 className="heading">CHIT CHAT</h3>
        </div>
        <div className="FormDiv">
          <h3 className="heading">Verify</h3>
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              pattern="[0-9]"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
          <button
            className="button"
            onClick={() => {
              gotoLogin();
              getData();
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
