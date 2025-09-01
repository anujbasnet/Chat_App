import React from "react";
import "./Login.css";
import Github from '../assets/images/github-mark.png'
import Google from '../assets/images/Google__G__logo.svg'
import Facebook from '../assets/images/facebook.png'
function Login() {
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3
           className="heading"
          >
            CHIT CHAT
          </h3>
        </div>
        <div className="FormDiv">
          <h3
            className="heading"
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
          <div className="signupWith">
            <p className="signupWith_Button">
              <img src={Google} className="Icon" />
            </p>
            <p className="signupWith_Button">
              <img src={Github} className="Icon" />
            </p>
             <p className="signupWith_Button">
              <img src={Facebook} className="Icon" />
            </p>
          </div>
          <div style={{display:'flex',paddingLeft:'60px'}}>
          <p style={{
              color: "white",
              fontFamily: "Gilroy-Medium, sans-serif",
              fontSize: "10px",
            }}>
            Don't have an account yet?
          </p>
          
          <p style={{
              color: "white",
              fontFamily: "Gilroy-Medium, sans-serif",
              fontSize: "10px",
              fontWeight:'bold',
            }}> Register for free</p>
          </div>
      </div>
    </div>
  );
}

export default Login;
