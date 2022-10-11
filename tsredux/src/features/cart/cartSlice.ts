import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import cartItems from "../../cartItems";

interface CartInitialState {
  cartItems: Array<any>;
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartInitialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
  },
});

export const { increment, decrement } = cartSlice.actions;

// console.log(cartSlice);
export const selectCount = (state: RootState) => state.cart;
export default cartSlice.reducer;
