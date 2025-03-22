import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    username: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            state.status = true;
           const { username, password } = action.payload;
           if(username){
            state.username = username
           }
           else{
            state.username = "user123"
           }

           
        },
        logout: (state) =>{
            state.status = false;
            state.username = null;
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer;