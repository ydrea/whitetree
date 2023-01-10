import { createSlice } from "@reduxjs/toolkit";

//user
const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "tester@test.com",
    pass: "123456",
  },

  reducers: {
    addIt: (state, action) => {},
    upDate: (state, action) => {
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
    deLete: (state) => {
      state: {
      }
    },
  },
});

export const { addIt, upDate, deLete } = userSlice.actions;

export default userSlice.reducer;
