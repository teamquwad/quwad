
import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducer/loadingSlice.js"
import alertReducer from "./reducer/alertSlice.js"

let store = configureStore({
    reducer:{
      loadingReducer,
      alertReducer,
    }
});

export default store
