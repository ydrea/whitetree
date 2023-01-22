import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "title1",
    content:
      "Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.",
  },
  {
    id: 2,
    title: "title2",
    content:
      "Appends new elements to the end of an array, and returns the new length of the array. @param items — New elements to add to the array.",
  },
  { id: 3, title: "title3", content: "content3" },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addIt(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers: {},
});

export const selectPosts = (state) => state.posts;

export const { addIt } = postSlice.actions;
export default postSlice.reducer;

// //

// export const getPokemon = createAsyncThunk("pokemon/getPokemon", async () => {
//   const response = await await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );
//   return await response.json();
// });

// export const pokemonSlice = createSlice({
//   name: "pokemon",
//   initialState,
//   reducers: {
//     setSearch(state, action: PayloadAction<string>) {
//       state.search = action.payload;
//       state.filteredPokemon = state.pokemon.filter(({ name }) =>
//         name.toLowerCase().includes(state.search.toLowerCase())
//       );
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPokemon.pending, (state) => {
//         state.pending = true;
//       })
//       .addCase(getPokemon.fulfilled, (state, { payload }) => {
//         state.pending = false;
//         state.pokemon = payload;
//         state.filteredPokemon = payload;
//       })
//       .addCase(getPokemon.rejected, (state) => {
//         state.pending = false;
//         state.error = true;
//       });
//   },
// });

// export const { setSearch } = pokemonSlice.actions;

// export const selectSearch = (state) => state.pokemon.search;
// export const selectFilteredPokemon = (state) =>
//   state.pokemon.filteredPokemon;
