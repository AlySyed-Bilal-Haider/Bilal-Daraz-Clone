import { createSlice } from "@reduxjs/toolkit";
const adminprofileSlice = createSlice({
  name: "adminprofile",
  initialState: {
    currentAdminprofile: null,
    isFetching: false,
    error: false,
  },
  reducers: {
   adminprofileStart: (state) => {
      state.isFetching = true;
    },
   adminprofileSuccess: (state, action) => {
      state.isFetching = false;
      state.currentAdminprofile = action.payload;
      state.error=false;
    },
   adminprofileFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      state.currentAdminprofile=null;
    },
  },
});

export const { adminprofileStart, adminprofileSuccess, adminprofileFailure } = adminprofileSlice.actions;
export default adminprofileSlice.reducer;