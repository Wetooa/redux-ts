import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ModalInitialState {
  isOpen: boolean;
}

const initialState: ModalInitialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const selectCount = (state: RootState) => state.cart;
export default modalSlice.reducer;
