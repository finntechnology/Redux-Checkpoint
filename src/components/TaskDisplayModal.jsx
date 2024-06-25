import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalSlice";
import { editTask, updateTaskStatus } from "../features/TaskSlice";
import InputField from "./InputField";
import { fail, succeed } from "../features/snackBarSlice";

const TaskModal = () => {
  const dispatch = useDispatch();

  // local state for edit textbox
  const [editDisplay, setEditDisplay] = useState(false);

  // get modal display state
  const { taskDisplayModalIsOpen, displayID } = useSelector(
    (state) => state.modal
  );

  //
  const tasks = useSelector((state) => state.tasks);

  // actions on modal close
  const handleClose = () => {
    dispatch(closeModal());
    setEditDisplay(false);
  };

  // action on 'mark as completed' or 'mark as pending'
  const handleCheck = () => {
    dispatch(closeModal());
    dispatch(updateTaskStatus(displayID));
  };

  const { id, description, isDone } =
    tasks.find((item) => item.id === displayID) || {};

  // set input field value while editing
  const [value, setValue] = useState();
  const handleInput = (e) => setValue(e.target.value);

  // dispatch from user input
  const handleSubmit = () => {
    if (value.trim()) {
      dispatch(editTask({ id, value }));
      dispatch(succeed());
      setEditDisplay(false);
    } else {
      dispatch(fail());
      setValue(description);
    }
  };

  // action on click of Edit Button
  const handleEdit = () => {
    setEditDisplay(true);
    setValue(description);
  };

  return (
    <div>
      <Dialog open={taskDisplayModalIsOpen} onClose={handleClose}>
        <DialogTitle>Task Detail</DialogTitle>

        {editDisplay ? (
          <>
            <DialogContent>
              <InputField
                handleInput={handleInput}
                label="Edit Task"
                value={value}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSubmit} color="success">
                Done
              </Button>
              <Button onClick={handleClose} color="error">
                Close
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContent>
              <Typography
                // className="hover:none"
                variant={isDone ? "strike" : "body1"}
              >
                {description}
              </Typography>
            </DialogContent>
            <DialogActions>
              {isDone ? null : <Button onClick={handleEdit}>Edit Task</Button>}
              <Button onClick={handleCheck} color="success">
                {isDone ? "Mark as Pending" : "Mark as Completed"}
              </Button>
              <Button onClick={handleClose} color="error">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default TaskModal;
