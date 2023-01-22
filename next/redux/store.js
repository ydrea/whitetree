// import { combineReducers, configureStore } from "@reduxjs/toolkit";
//
import counter from "./counterSlice";
import users from "./userSlice";
import icon from "./iconSlice";
import posts from "./postSlice";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Action,
  PayloadAction,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

export let store = null;

export default function getStore(incomingPreloadState) {
  store = configureStore({
    reducer: {
      counter,
      users,
      icon,
      posts,
    },
    preloadedState: incomingPreloadState,
  });
  return store;
}

//
// const combinedReducer = combineReducers({
//   counter,
//   users,
//   icon,
//   posts,
// });
// export const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });
// export const wrapper = makeStore;

/*
MODEL
*/
// import {
//   configureStore,
//   // applyMiddleware,
//   combineReducers,
// } from "@reduxjs/toolkit";
// import { HYDRATE, createWrapper } from "next-redux-wrapper";

// const combinedReducer = combineReducers({
//   counter,
//   users,
//   icon,
//   posts,
// });

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       counter: {
//         count: state.counter.count + action.payload.counter.count,
//       },
//       users: {
//         users: [...new Set([...action.payload.users, ...state.users])],
//       },
//       icon: {
//         icon: [...new Set([...action.payload.icon, ...state.icon])],
//       },
//       posts: {
//         posts: [...new Set([...action.payload.posts, ...state.posts])],
//       },
//     };
//     console.log("next state", nextState);
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// const initStore = () => {
//   return configureStore({ reducer: masterReducer });
// };

// export const wrapper = createWrapper(initStore, { debug: true });
