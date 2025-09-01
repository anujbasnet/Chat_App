import React from "react";
import "./Login.css";
import Background from "../assets/images/BackGround.png";
function Login() {
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              color: "white",
              fontFamily: "Gilroy-Bold, sans-serif",
              fontSize: "24px",
            }}
          >
            CHIT CHAT
          </h3>
        </div>
        <div className="FormDiv">
          <h3
            style={{
              color: "white",
              fontFamily: "Gilroy-Bold, sans-serif",
              fontSize: "24px",
            }}
          >
            Login
          </h3>
          <p
            className="SmallFonts"
          >
            Email
          </p>
          <input
            placeholder="Enter your email"
            className='inputField'
      
          />
          <p
            className="SmallFonts"
          >
            Password
          </p>
          <input
            placeholder="Enter your password"
            className='inputField'
          />
          <br />
          <p className="SmallFonts">
            Forgot Password?
          </p>
          <button className="button">Sign in</button>
          
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontFamily: "Gilroy-Medium, sans-serif",
              fontSize: "13px",
            }}>
            or continue with
          </p>
          </div>
      </div>
    </div>
  );
}

export default Login;
