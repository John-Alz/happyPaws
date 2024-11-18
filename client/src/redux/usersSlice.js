import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    profile: [],
    login: {
        email: '',
        password: ''
    },
    walkers: [],
    singleWalker: []
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
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
        },
        setSingleWalker: (state, action) => {
            state.singleWalker = action.payload
        }
    }
})

export const { setUsers, getUserProfile, setLogin, setWalkers, setSingleWalker } = usersSlice.actions;
export default usersSlice.reducer