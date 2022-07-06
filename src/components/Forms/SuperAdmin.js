import React from "react";
import Button from "@mui/material/Button";
import "./superAdmin.css";

function SuperAdmin() {
  return (
    <div className="superadminpage-wrapper">
      <div className="container">
        <div className="title">
          <p>Super Admin Login</p>
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

export default SuperAdmin;
