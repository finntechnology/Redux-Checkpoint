import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { openTaskAddModal } from "../features/modalSlice";

const AddTask = () => {
  const dispatch = useDispatch();

  // handlClick open functin sets modal display to true
  const handleClickOpen = () => {
    dispatch(openTaskAddModal());
  };

  return (
    <div className="bottom-0 sticky text-center">
      <Button
        // fullWidth
        className="space-x-4"
        variant="contained"
        onClick={handleClickOpen}
        color="myPink"
      >
        <FontAwesomeIcon icon={faPlus} size="2x" />
        <span>Add New Task</span>
      </Button>
    </div>
  );
};

export default AddTask;
