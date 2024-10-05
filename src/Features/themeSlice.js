import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: "themeSlice",
    initialState: true, // Initial state is a boolean (true/false)
    reducers: { // Correct spelling: 'reducers' (plural)
        toggleTheme: (state) => !state, // Return the toggled state directly
    },
});

export const { toggleTheme } = themeSlice.actions; // Export action correctly
export default themeSlice.reducer; // Export reducer for the store