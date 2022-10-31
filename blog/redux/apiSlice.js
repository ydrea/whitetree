import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 4 };

export const apiSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    incr: (state) => {
      state.count += 1;
    },
    decr: (state) => {
      state.count -= 1;
    },
  },
});

export const { incr, decr } = apiSlice.actions;
export const selectCount = (state) => state.counter.count;

export default apiSlice.reducer;
