// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
//
import counter from "./counterSlice";
import users from "./userSlice";
import icon from "./iconSlice";
// //
// const combinedReducer = combineReducers({
//   counter,
//   users,
//   icon,
// });
// export const makeStore = () =>
//   configureStore({
//     reducer: combinedReducer,
//   });
// export const wrapper = createWrapper(makeStore, { debug: true });

/*
MODEL
*/
import {
  configureStore,
  // applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  counter,
  users,
  icon,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [...new Set([...action.payload.users, ...state.users])],
      },
      icon: {
        icon: [...new Set([...action.payload.icon, ...state.icon])],
      },
    };
    console.log("next state", nextState);
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return configureStore({ reducer: masterReducer });
};

export const wrapper = createWrapper(initStore, { debug: true });
