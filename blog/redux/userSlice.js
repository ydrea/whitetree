import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    update: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    remove: (state) => (state = {}),
  },
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;
