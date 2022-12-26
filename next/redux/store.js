import { configureStore } from "@reduxjs/toolkit";
//
import userReducer from "./userSlice";
import iconReducer from "./iconSlice";
//

export default configureStore({
  reducer: {
    user: userReducer,
    icon: iconReducer,
  },
});
