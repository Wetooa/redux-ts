import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import cartItems, { CartItemsProps } from "../../cartItems";

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
      state.amount = 0;
      state.total = 0;
    },
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item: CartItemsProps) => payload === item.id
      );
      cartItem!.amount += 1;
      state.amount += 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item: CartItemsProps) => payload === item.id
      );
      cartItem!.amount -= 1;
      state.amount -= 1;
      if (cartItem!.amount === 0) {
        state.cartItems = state.cartItems.filter(
          (item: CartItemsProps) => payload !== item.id
        );
      }
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item: CartItemsProps) => payload !== item.id
      );
    },
    calculateTotal: (state) => {
      state.total = 0;
      state.cartItems.forEach((item: CartItemsProps) => {
        state.total += item.amount * parseFloat(item.price);
      });
    },
  },
});

export const { increment, decrement, clearCart, removeItem, calculateTotal } =
  cartSlice.actions;

// console.log(cartSlice);
export const selectCount = (state: RootState) => state.cart;
export default cartSlice.reducer;
