import { createSlice } from '@reduxjs/toolkit'

let UserAuthSlice = createSlice({
    name : "userauth",
    initialState : {},
    reducers : {
        doLogin(state, action){
            return { login : true }
        },
        doLogout(state, action){
            return {};
        }
    }

})

export default UserAuthSlice.reducer;

export let { doLogin, doLogout } = UserAuthSlice.actions;