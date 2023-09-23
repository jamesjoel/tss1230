import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '../util/API';

// disp(fetchStu())

let fetchStu = createAsyncThunk('fetch', async ()=>{
    let response = await axios.get(`${API}/students`);
    return response.data;
})

let addStu = createAsyncThunk('add', async (data)=>{
    let response = await axios.post(`${API}/students`, data);
    return response.data;
})

let delStu = createAsyncThunk('delete', async (obj)=>{
    let response = await axios.delete(`${API}/students/`+obj._id);
    return response.data;
})
let updateStu = createAsyncThunk('update', async (obj)=>{
    let response = await axios.put(`${API}/students/`+obj._id, obj);
    return response.data;
})

let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : {
        [fetchStu.fulfilled] : (state, action)=>{
            return action.payload;
        },
        [addStu.fulfilled] : (state, action)=>{
            state.push(action.payload.result);
        },
        [delStu.fulfilled] : (state, action)=>{
            return state.filter(value=> value._id != action.payload.result._id)
        },
        [updateStu.fulfilled] : (state, action)=>{
            return state.map(value=>{
                if(value._id == action.payload.result._id){
                    return action.payload.result;
                }else{
                    return value;
                }
            })
        }
    }
    
})

export default StudentSlice.reducer;

export {fetchStu, addStu, delStu, updateStu};