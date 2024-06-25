import { TextField } from "@mui/material";
import React from "react";

const InputField = ({ handleInput, value, label }) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      label={label}
      type="text"
      variant="standard"
      onChange={handleInput}
      value={value}
      id="standard-multiline-flexible"
      multiline
      maxRows={4}
    />
  );
};

export default InputField;
