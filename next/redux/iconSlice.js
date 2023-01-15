import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, fromImageToUrl } from "../utils/urls";

import icons from "../public/icons.json";

export const getEmAsync = createAsyncThunk(
  "callEm",
  async (payload, context) => {
    const jwt = parseCookies(context).jwt;

    const resp = await fetch(`${API_URL}/icons`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    if (resp.ok) {
      const iconSer = await resp.json();
      console.log("strAPI=>Slajs", iconSer);
      return { iconSer };
    } else {
      return "anxious";
    }
  }
);

const item = icons.icons;
const iconSlice = createSlice({
  name: "icon",
  initialState: item,

  reducers: {
    getEm: (state) => {
      state.icon;
    },
    addIt: (state, action) => {
      [...state.icon, action.payload];
    },
    toggleChecked: (state, action) => {
      const idX = state.findIndex((i) => i.id === action.payload.id);
      console.log(idX);
      state[idX].fav = action.payload.fav;
    },
  },
});

export const { toggleChecked, getEm } = iconSlice.actions;

export default iconSlice.reducer;
