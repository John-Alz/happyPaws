import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    profile: [],
    login: {
        email: '',
        password: ''
    },
    walkers: [],
    singleUser: []
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
        setSingleUser: (state, action) => {
            state.singleUser = action.payload
        }
    }
})

export const { setUsers, getUserProfile, setLogin, setWalkers, setSingleUser } = usersSlice.actions;
export default usersSlice.reducer