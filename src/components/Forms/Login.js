import React from "react";
import Button from "@mui/material/Button";
import GoogleButton from "react-google-button";
import "./login.css";

function Login() {
  return (
    <div className="loginpage-wrapper">
      <div className="container">
        <div className="title">
          <p>Login</p>
        </div>
        <div className="form">
          <div className="field">
            <p>Email Address</p>
            <input type="text" placeholder="Enter email address" />
          </div>
          <div className="field">
            <p>Password</p>
            <input type="password" placeholder="Enter password" />
          </div>
        </div>
        <div className="forgot">
          <p>Forgot Password?</p>
        </div>
        <div className="button">
          <Button
            style={{
              textTransform: "none",
              fontSize: "18px",
              fontWeight: "300",
              backgroundColor: "rgb(68,142,247)",
            }}
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </div>
        <div className="google">
          <p>or login with</p>
          <GoogleButton
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
