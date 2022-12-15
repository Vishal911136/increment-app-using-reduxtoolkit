import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";

const store = configureStore({
  reducer: {
    counteNum: customReducer,
  },
});

export default store;
