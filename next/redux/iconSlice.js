import { createSlice } from "@reduxjs/toolkit";
import Image from "next/image";
import { API_URL } from "../utils/urls";

const iconSlice = createSlice({
  name: "icon",
  //prettier-ignore
  initialState: [
    {id:1,title: 'vegan', relURL: '/uploads/vg_f9075a35c3.svg', checked: false},
    {id:2,title: 'local', relURL: '/uploads/ls_265521672a.svg', checked: false},
    {id:3,title: 'gluten-', relURL: '/uploads/gf_29fbacaf4a.svg', checked: false},
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
