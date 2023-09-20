import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../util/API'

let getAllStu = createAsyncThunk("getallstu", async ()=>{
    let response =  await axios.get(`${API}/students`);
    return response.data;
})


let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : {
        [getAllStu.fulfilled] : (state, action)=>{
            return action.payload;
        }
    }
})

export default StudentSlice.reducer;

export { getAllStu };


