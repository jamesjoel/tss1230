import { createSlice } from '@reduxjs/toolkit'

let data = [
    {
        _id : 1,
        name :"rohit",
        age : 25
    },
    {
        _id : 2,
        name :"amar",
        age : 22
    }
    /*
        {
            _id : 2,
            name : "vijay",
            age : 30
        }
    */
]

let TeacherSlice = createSlice({
    name : "teacher",
    initialState : data,
    reducers : {
        add(state, action){
            let count = state.length;
            count++;
            action.payload._id = count;
            state.push(action.payload)
        },
        remove(state, action){
            // console.log(action.payload);
            return state.filter(value => value._id != action.payload._id)
        },
        update(state, action){
            return state.map(value=>{
                if(value._id == action.payload._id){
                    return action.payload;
                }else{
                    return value;
                }
            })
        }
    }
})

export default TeacherSlice.reducer;

export let { add, update, remove } = TeacherSlice.actions;