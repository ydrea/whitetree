import { createSlice } from "@reduxjs/toolkit";

//user
const userSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    error: null,
    success: false,
    user: {},
    token: null,
  },
  reducers: {
    // addIt: (state, action) => {
    //   state.user = [...state.user, action.payload];
    // },
    upDate: (state, action) => {
      state.user.email = action.payload.email;
      state.user.pass = action.payload.pass;
    },
    deLete: (state) => (state = {}),
  },
});

export const { addIt, upDate, deLete } = userSlice.actions;
export const selectUser = (state) => state.users.user;

export default userSlice.reducer;
