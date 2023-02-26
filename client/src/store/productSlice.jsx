import { createSlice } from "@reduxjs/toolkit";
// const currentProduct=localStorage.getItem("currentProduct") ? JSON.parse(localStorage.getItem("currentProduct")):null;
const postSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    productStart: (state) => {
      state.isFetching = true;
    },
    productSuccess: (state, action) => {
      state.isFetching = false;
      state.currentProduct = action.payload;
      state.error=false;
    },
    postFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentProduct=null;
    },
    
  },
});

export const { productStart, productSuccess, productFailure} = postSlice.actions;
export default userSlice.reducer;