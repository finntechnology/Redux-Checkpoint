import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const snackBar = createSlice({
  name: "variants",
  initialState,
  reducers: {
    fail: (state) => {
      state.severity = "error";
      state.msg = "Task Cannot be Empty";
      state.isOpen = true;
    },
    succeed: (state) => {
      state.severity = "success";
      state.msg = "Tasks Updated";
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

// exports needed by store
export const { fail, succeed, close } = snackBar.actions;
export default snackBar.reducer;
