import React, { useState } from "react";
import "./Login.css";
import Github from "../assets/images/github-mark.png";
import Google from "../assets/images/Google__G__logo.svg";
import Facebook from "../assets/images/facebook.png";
function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const setnewEmail = () => {
    console.log(Email);
    setEmail("");
  };
  const setnewPassword = () => {
    console.log(Password);
    setPassword("");
  };
  return (
    <div className="Login">
      <div className="glass">
        <div style={{ textAlign: "center" }}>
          <h3 className="heading">CHIT CHAT</h3>
        </div>
        <div className="FormDiv">
          <h3 className="heading">Login</h3>
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
            placeholder="Enter your password"
            className="inputField"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <p className="SmallFontsUse">Forgot Password?</p>
          <button
            className="button"
            onClick={() => {
              setnewEmail();
              setnewPassword();
            }}
          >
            Sign in
          </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontFamily: "Gilroy-Medium, sans-serif",
              fontSize: "13px",
            }}
          >
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
        <div style={{ display: "flex", paddingLeft: "60px" }}>
          <p
            style={{
              color: "white",
              fontFamily: "Gilroy-Medium, sans-serif",
              fontSize: "10px",
            }}
          >
            Don't have an account yet?
          </p>

          <p
            className="Register"
          >
            {" "}
            Register for free
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
