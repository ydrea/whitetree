import { createSlice } from "@reduxjs/toolkit";

//
const userSlice = createSlice({
  name: "user",
  initialState: [
    { id: 1, title: "medo", checked: true },
    { id: 2, title: "zeko", checked: true },
    { id: 3, title: "mukvica", checked: true },
  ],
  reducers: {
    addIt: (state, action) => {},
  },
});

export const { addIt } = userSlice.actions;

export default userSlice.reducer;
