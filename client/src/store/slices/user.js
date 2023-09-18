import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    info : {
        isLogged: false,
        id: "John Doe",
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signin: (state, action) => {
            state.info = {isLogged: true, id: action.payload.label};
        },
        signout: (state, action) => {
            state.info = {
                isLogged: false,
                id: "John Doe",
            };
            localStorage.removeItem("auth")
        }
    }
});


export const {signin, signout} = userSlice.actions

export default userSlice.reducer;