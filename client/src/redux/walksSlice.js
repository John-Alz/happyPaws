import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    walks: [],
    walk: []
}

export const walksSlice = createSlice({
    name: 'walks',
    initialState,
    reducers: {
        setWalks: (state, action) => {
            state.walks = action.payload;
        },
        setWalk: (state, action) => {
            state.walk = action.payload;
        }
    }
})

export const { setWalks, setWalk } = walksSlice.actions;
export default walksSlice.reducer