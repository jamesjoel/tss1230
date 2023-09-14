import { createSlice } from '@reduxjs/toolkit'

let DemoSlice = createSlice({
    name : "demo",
    initialState : ["red", "green", "blue"],
    reducers : {
        add(state, action){
            state.push(action.payload);
        }
    }
})

export default DemoSlice.reducer;
export let { add } = DemoSlice.actions;