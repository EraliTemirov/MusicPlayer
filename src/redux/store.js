import { configureStore } from "@reduxjs/toolkit";

import playerReducer from './feature/playerSlice';

export const store =configureStore({
    reducer:{
        player: playerReducer,
    },
});