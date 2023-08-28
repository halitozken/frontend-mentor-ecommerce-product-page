import { createSlice } from "@reduxjs/toolkit";

export const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setOpen } = carouselSlice.actions;
export default carouselSlice.reducer;
