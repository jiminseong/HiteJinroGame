// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import participantReducer from '../redux/participantSlice';

export const store = configureStore({
    reducer: {
        participants: participantReducer,
    },
});
