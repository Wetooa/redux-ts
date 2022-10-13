import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CartItemsProps } from "../../cartItems";
import axios from "axios";

interface CartInitialState {
  cartItems: CartItemsProps[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  // so u can get some stuff in this method
  async (name: string | undefined, thunkAPI) => {
    try {
      console.log(name);
      console.log(thunkAPI);
      console.log(thunkAPI.getState());
      thunkAPI.dispatch(testing());
      // OwO does this mean i can dispatch actions in my own reducer OwO
      // yep

      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const initialState: CartInitialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    testing: (state) => {
      console.log("here");
    },
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
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    });
    builder.addCase(getCartItems.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const {
  testing,
  increment,
  decrement,
  clearCart,
  removeItem,
  calculateTotals,
} = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart;
export default cartSlice.reducer;
