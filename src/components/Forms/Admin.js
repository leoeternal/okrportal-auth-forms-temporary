import React from "react";
import Button from "@mui/material/Button";
import "./admin.css";

function Admin() {
  return (
    <div className="adminpage-wrapper">
      <div className="container">
        <div className="title">
          <p>Admin Login</p>
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
      </div>
    </div>
  );
}

export default Admin;
