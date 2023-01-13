import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL, fromImageToUrl } from "../utils/urls";

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
      const icon = await resp.json();
      return { icon };
    } else {
      return "anxious";
    }
  }
);
const iconSlice = createSlice({
  name: "icon",
  //prettier-ignore
  initialState: {id:[], fav:false},
  reducers: {
    toggleFav: (state, action) => {
      const idX = state.findIndex((i) => i.id === action.payload.id);
      console.log(idX);
      state[idX].fav = action.payload.fav;
    },
  },
});

export const { toggleFav } = iconSlice.actions;

export default iconSlice.reducer;
