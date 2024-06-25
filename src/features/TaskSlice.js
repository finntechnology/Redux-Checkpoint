import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

export const Tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => [
      { id: nanoid(), description: action.payload, isDone: false },
      ...state,
    ],

    updateTaskStatus: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.isDone = !item.isDone;
        }
      });
    },

    editTask: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload.id) {
          item.description = action.payload.value.trim();
        }
      });
    },
  },
});

// exports needed by store
export const { addTask, updateTaskStatus, editTask } = Tasks.actions;
export default Tasks.reducer;
