import React from "react";
import "./userProfile.css";
import Button from "@mui/material/Button";
import user from "../../static/images/user.jpeg";

function UserProfile() {
  return (
    <div className="userprofile-wrapper">
      <div className="left">
        <div className="image">
          <img src={user} alt="auth" />
        </div>
        <div className="details">
          <p>
            <strong>NAME:</strong> Nikhil Jindal
          </p>
          <p>
            <strong>ROLE/DESIGNATION:</strong> Software Engineer
          </p>
          <p>
            <strong>EMAIL:</strong> nikhil.j@valuebound.com
          </p>
          <p>
            <strong>CONTACT:</strong> 8866596999
          </p>
        </div>
        <div className="button">
          <Button size="large" variant="contained">
            Edit
          </Button>
        </div>
      </div>
      <div className="right">
        <h1>Profile</h1>
        <div className="userform">
          <div className="row1">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <div className="row2">
            <input type="email" placeholder="Email address" />
          </div>
          <div className="row3">
            <textarea placeholder="Address" />
          </div>
          <div className="row4">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Pincode" />
          </div>
          <div className="row5">
            <input type="text" placeholder="Contact" />
          </div>
          <div className="button">
            <Button size="large" variant="contained">
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
