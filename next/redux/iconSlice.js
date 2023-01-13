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
  initialState: [
    { id: 1, fav: false },
    { id: 2, fav: false },
    { id: 3, fav: false },
    { id: 4, fav: false },
    { id: 5, fav: false },
    { id: 6, fav: false },
    { id: 7, fav: false },
    { id: 8, fav: false },
  ],
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
