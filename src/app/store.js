import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../features/modalSlice";
import TasksReducer from "../features/TaskSlice";
import taskInputReducer from "../features/taskInputSlice";
import snackBarReducer from "../features/snackBarSlice";
import { createTheme } from "@mui/material";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    tasks: TasksReducer,
    taskInput: taskInputReducer,
    variants: snackBarReducer,

    // will contain list of reducers
  },
});

export const theme = createTheme({
  typography: {
    strike: {
      textDecoration: "line-through",
      letterSpacing: "1px",
      fontSize: 20,
      color: "#B15D1B",
      fontFamily: "Handlee, sans-serif",
    },
    normal: {
      fontSize: 20,
      color: "#160452",
      fontFamily: "Playfair Display Variable, sans-serif",
    },
  },
  palette: {
    myPink: {
      main: "#FCA5AF",
    },
  },
});
