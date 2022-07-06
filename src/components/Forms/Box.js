import React, { useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./box.css";

function Box() {
  const [type, setType] = React.useState("");
  const [report, setReport] = useState("");
  const [name, setName] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleReportChange = (event) => {
    setReport(event.target.value);
  };

  return (
    <div className="box">
      <div className="level1">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="First name"
        />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email address" />
      </div>
      <div className="level2">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleTypeChange}
            style={{ width: "70%" }}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="admin2">Admin2</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Reporting To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={report}
            label="Reporting To"
            onChange={handleReportChange}
            style={{ width: "70%" }}
          >
            <MenuItem value="manager">Manager</MenuItem>
          </Select>
        </FormControl>
        <DeleteIcon
          style={{
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
          }}
        />
      </div>
      <div onClick={() => console.log(name)} className="level3">
        <Button variant="contained">Add Member</Button>
      </div>
    </div>
  );
}

export default Box;
