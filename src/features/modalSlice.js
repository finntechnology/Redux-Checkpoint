import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskDisplayModalIsOpen: false,
  taskAddModalIsOpen: false,
  displayID: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.taskDisplayModalIsOpen = false;
      state.taskAddModalIsOpen = false;
    },
    openTaskDisplayModal: (state, action) => {
      state.taskDisplayModalIsOpen = true;
      state.displayID = action.payload;
    },
    openTaskAddModal: (state) => {
      state.taskAddModalIsOpen = true;
    },
  },
});

// exports needed by store
export const { closeModal, openTaskDisplayModal, openTaskAddModal } =
  modalSlice.actions;
export default modalSlice.reducer;
