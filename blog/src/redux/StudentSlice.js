import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// disp(fetchStu())

let fetchStu = createAsyncThunk('fetch', async ()=>{
    let response = await axios.get("http://localhost:8080/api/students");
    return response.data;
})
// let fetchOneStu = createAsyncThunk('fetchone', async (id)=>{
//     let response = await axios.get("http://localhost:8080/api/students/"+id);
//     return response.data;
// })
// disp(addStu(formData))
let addStu = createAsyncThunk('add', async (data)=>{
    let response = await axios.post("http://localhost:8080/api/students", data);
    return response.data;
})

let delStu = createAsyncThunk('delete', async (obj)=>{
    let response = await axios.delete("http://localhost:8080/api/students/"+obj._id);
    return response.data;
})
// let updateStu = createAsyncThunk('update', async (obj)=>{
//     let response = await axios.put("http://localhost:8080/api/students/"+obj._id, obj);
//     return response.data;
// })

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
        }
    }
    
})

export default StudentSlice.reducer;

export {fetchStu, addStu, delStu};