import { configureStore } from '@reduxjs/toolkit'; // Notice the lowercase 'c'
import { themeSlice } from './themeSlice';

export const store = configureStore({
    reducer: {
        themeKey: themeSlice.reducer,  
    },
});
