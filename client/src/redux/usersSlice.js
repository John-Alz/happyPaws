import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    profile: [],
    login: {
        email: '',
        password: ''
    },
    walkers: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUserProfile: (state, action) => {
            state.profile = action.payload;
        },
        setLogin: (state, action) => {
            state.login = {
                ...state.login,
                [action.payload.name]: action.payload.value

            }
        },
        setWalkers: (state, action) => {
            state.walkers = action.payload
        }
    }
})

export const { getUserProfile, setLogin, setWalkers } = usersSlice.actions;
export default usersSlice.reducer