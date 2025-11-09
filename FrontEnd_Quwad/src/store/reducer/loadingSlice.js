
import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    message: "Loading",
    display:0,
}

let loadingSlice = createSlice({
    name:"loadingSlice",
    initialState,
    reducers:{
        setLoading: (state,action)=>{
            state.display = action.payload;
        },
    }
});

export let { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
