import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
//
import counter from "./counterSlice";
import users from "./userSlice";
import icon from "./iconSlice";
//
const combinedReducer = combineReducers({
  counter,
  users,
  icon,
});
export const makeNextStore = () =>
  configureStore({
    reducer: combinedReducer,
  });
export const wrapper = createWrapper(makeNextStore);
