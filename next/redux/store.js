import apiReducer from "./apiSlice";
import userReducer from "./userSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
//
const rootReducer = combineReducers({
  user: userReducer,
  api: apiReducer,
});
export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
//
export default configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
  },
});
