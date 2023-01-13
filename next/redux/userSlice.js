import { createSlice } from "@reduxjs/toolkit";

//user
const userSlice = createSlice({
  name: "users",
  initialState: {
    email: "tester",
    pass: "123456",
  },

  reducers: {
    addIt: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    upDate: (state, action) => {
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
    deLete: (state) => (state = {}),
  },
});

export const { addIt, upDate, deLete } = userSlice.actions;

export default userSlice.reducer;
