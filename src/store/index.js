import { configureStore } from "@reduxjs/toolkit";

// Reducers
import toggleMode from './reducres/Toggle';

// Slices


export default configureStore({
    reducer: {
        // Reducers
        toggleMode
        // Slices
    },
});