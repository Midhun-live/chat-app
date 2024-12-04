import { configureStore } from '@reduxjs/toolkit'; // Notice the lowercase 'c'
import { themeSlice } from './themeSlice';
import { refreshSidebar } from './refreshSidebar';

export const store = configureStore({
    reducer: {
        themeKey: themeSlice.reducer,  
        refreshkey:refreshSidebar,
    },
});
