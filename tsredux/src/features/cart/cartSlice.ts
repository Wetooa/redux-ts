import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import cartItems, { CartItemsProps } from "../../cartItems";
import { useAppDispatch } from "../hooks";

interface CartInitialState {
  cartItems: CartItemsProps[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartInitialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item: CartItemsProps) => payload === item.id
      );
      cartItem!.amount += 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item: CartItemsProps) => payload === item.id
      );
      cartItem!.amount -= 1;
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item: CartItemsProps) => payload !== item.id
      );
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item: CartItemsProps) => {
        amount += item.amount;
        total += item.amount * parseInt(item.price);
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increment, decrement, clearCart, removeItem, calculateTotals } =
  cartSlice.actions;

export const selectCount = (state: RootState) => state.cart;
export default cartSlice.reducer;
