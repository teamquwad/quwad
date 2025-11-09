
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    message:"",
};

let alertSlice = createSlice({
    name: "alertSlice",
    initialState,
    reducers:{
        setAlertMessage: (state, action)=>{
            state.message=action.payload
        }
    }
})

export let { setAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;