import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Verify.css";

function Register() {
  const inputs = useRef([]);
  const [code, setcode] = useState(["", "", "", "", "", ""]);
  const newCode = [...code];
  const handleChange = (text, index) => {
    if (!/^\d*$/.test(text)) return;
    newCode[index] = text;
    setcode(newCode);
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/Login");
  };
  const getData = async () => {
    try {
      const res = await axios.post("http://192.168.56.1:5000/Verify", {
        code,
      });
      const gotinfo=JSON.stringify(res.data.Code);
      alert(gotinfo);
      alert(res.data.message);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3 className="heading">CHIT CHAT</h3>
        </div>
        <div className="FormDiv">
          <h3 className="heading">Verification</h3>
          <div className="VerifyOTPinput">
            {code.map((digit, index) => (
              <input
                className="VerifyOTPinputbox"
                key={index}
                type="text"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                ref={(e) => (inputs.current[index] = e)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !code[index] && index > 0) {
                    inputs.current[index - 1].focus();
                  }
                }}
              />
            ))}
          </div>
          <button
            className="Verify_button"
            onClick={() => {
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
