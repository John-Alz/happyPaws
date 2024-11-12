import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import walksSlice from "./walksSlice";
import petsSlice from "./petsSlice";


export const store = configureStore({
    reducer: {
        users: usersSlice,
        walks: walksSlice,
        pets: petsSlice
    }
})