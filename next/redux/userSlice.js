import { createSlice } from "@reduxjs/toolkit";

//
const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "tester",
    pass: "123456",
  },

  // { id: 1, title: "medo", checked: true },
  // { id: 2, title: "zeko", checked: true },
  // { id: 3, title: "mukvica", checked: true },

  reducers: {
    addIt: (state, action) => {},
    upDate: (state, action) => {
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
  },
});

export const { addIt, upDate } = userSlice.actions;

export default userSlice.reducer;
