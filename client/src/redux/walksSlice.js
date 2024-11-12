import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    walks: []
}

export const walksSlice = createSlice({
    name: 'walks',
    initialState,
    reducers: {
        setWalks: (state, action) => {
            state.profile = action.payload;
        }
    }
})

export const { setWalks } = walksSlice.actions;
export default walksSlice.reducer