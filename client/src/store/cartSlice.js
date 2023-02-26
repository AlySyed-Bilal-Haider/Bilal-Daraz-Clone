import { createSlice } from "@reduxjs/toolkit";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
// console.log(cartFromLocalStorage, "get cart data")
const initalState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartFromLocalStorage === null? []:[...cartFromLocalStorage],
  //  cartFromLocalStorage.length > 0 ? cartFromLocalStorage:[],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});
export const { add, remove, increament } = cartSlice.actions;
export default cartSlice.reducer;
