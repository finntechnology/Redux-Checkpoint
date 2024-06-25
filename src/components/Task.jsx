import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { openTaskDisplayModal } from "../features/modalSlice";
import { updateTaskStatus } from "../features/TaskSlice";

const SingleTask = ({ description, isDone, id }) => {
  const dispatch = useDispatch();

  // function to open modal when an indivual  task is clicked on
  const displayTask = (e) => {
    e.preventDefault();
    dispatch(openTaskDisplayModal(id));
  };

  // update doneStatus when checkbox is clicked
  const handleCheck = () => {
    dispatch(updateTaskStatus(id));
  };

  return (
    <>
      <div className="rounded-md px-6 shadow-md  bg-gradient-to-r from-amber-50 to-white ">
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "& .MuiSvgIcon-root": { fontSize: 30 },
                padding: 1,
              }}
              color="warning"
              onChange={handleCheck}
              checked={isDone}
            />
          }
          label={
            <a href="" onClick={displayTask}>
              <Typography variant={isDone ? "strike" : "normal"}>
                {description}
              </Typography>
            </a>
          }
        />
      </div>
    </>
  );
};

export default SingleTask;
