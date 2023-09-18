import { createSlice } from '@reduxjs/toolkit'

let AdminAuthSlice = createSlice({
    name : "admiauth",
    initialState : {},
    reducers : {
        adminLogin(state, action){
            return { admin : true };
        },
        adminLogout(state){
            return {}
        }
    }
})

export default AdminAuthSlice.reducer;

export let { adminLogin, adminLogout } = AdminAuthSlice.actions