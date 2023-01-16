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
    toggleChecked: (state, action) => {
      const idX = state.findIndex((i) => i.id === action.payload.id + 1);
      console.log(JSON.stringify(action.payload));
      console.log(idX);
      const indX = `ckb${idX}`;
      console.log(indX);
      state.icon[indX].fav = action.payload.fav;
    },
  },
});

export const { toggleChecked } = iconSlice.actions;

export default iconSlice.reducer;
