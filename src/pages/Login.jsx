import React from "react";
import "./Login.css";
import Background from "../assets/images/BackGround.png";
function Login() {
  return (
    <div className="Login">
      <div className="glass">
        <h3
          style={{
            color: "white",
            textAlign: "center",
            padding: "10px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          CHIT CHAT
        </h3>
        <h3
          style={{
            color: "white",
            fontFamily: "Arial, sans-serif",
            padding: "10px",
            paddingLeft: "60px",
          }}
        >
          Login
        </h3>
        <p
          style={{
            color: "white",
            fontFamily: "Arial, sans-serif",
            padding: "10px",
            paddingLeft: "60px",
          }}
        >
          Email
        </p>
      </div>
    </div>
  );
}

export default Login;
