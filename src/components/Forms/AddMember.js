import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./addMember.css";
import Box from "./Box";

function AddMember() {
  // const [loop, setLoop] = useState([1]);
  const [loop, setLoop] = useState([1]);

  return (
    <div className="addmember-wrapper">
      <h1>ADD MEMBER</h1>
      <div className="container">
        {loop.map((l, index) => {
          return <Box key={index} />;
        })}
      </div>
      <div className="button">
        <Button
          onClick={() => setLoop([...loop, 1])}
          color="error"
          variant="contained"
        >
          Add More
        </Button>
      </div>
    </div>
  );
}

export default AddMember;
