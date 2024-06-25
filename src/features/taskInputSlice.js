import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
};

export const taskInputSlice = createSlice({
  name: "taskInput",
  initialState,
  reducers: {
    captureInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

// exports needed by store
export const { captureInput } = taskInputSlice.actions;
export default taskInputSlice.reducer;
