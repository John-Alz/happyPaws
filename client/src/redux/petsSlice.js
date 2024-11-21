import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    pets: [],
    petsByOwner: [],
    pet: []
}

export const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        setPets: (state, action) => {
            state.pets = action.payload;
        },
        setPetsByOwner: (state, action) => {
            state.petsByOwner = action.payload;
        },
        setPet: (state, action) => {
            state.pet = action.payload;
        }
    }
})

export const { setPets, setPetsByOwner, setPet } = petsSlice.actions;
export default petsSlice.reducer