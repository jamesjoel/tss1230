import { createSlice } from '@reduxjs/toolkit'

let CategorySlice = createSlice({
    initialState : [],
    name : "category",
    reducers : {
        add(state, action){
            return action.payload;
        },
        addNewCate(state, action){
            state.push(action.payload);   
        },
        removeCate(state, action){
            return state.filter(value=> value._id != action.payload._id)
        }
    }
})

export default CategorySlice.reducer;

export let { add, addNewCate, removeCate } = CategorySlice.actions;