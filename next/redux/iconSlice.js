import { createSlice } from "@reduxjs/toolkit";
import Image from "next/image";
import { API_URL } from "../utils/urls";

const iconSlice = createSlice({
  name: "icon",
  //prettier-ignore
  initialState: [
  { id: 1, title: "medo", checked: true },
  { id: 2, title: "zeko", checked: true },
  { id: 3, title: "mukvica", checked: true },
],
  reducers: {
    toggleChecked: (state, action) => {
      const idX = state.findIndex((icon) => icon.id === action.payload.id);
      state[idX].checked = action.payload.checked;
    },
  },
});

export const { toggleChecked } = iconSlice.actions;

export default iconSlice.reducer;
