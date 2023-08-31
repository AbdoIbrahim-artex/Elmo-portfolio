
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    toggleLang : "en" ,
    toggleTheme : 'light',
}

const toggleSlice = createSlice({
    name: "toggle",
    initialState: INITIAL_STATE,
    reducers: {
        toggleThemeFun: (state,actions) => {
            state.toggleTheme = actions.payload;
        },
        toggleLangFun: (state,actions) => {
            state.toggleLang = actions.payload;
        },
    },
});

export const { toggleThemeFun , toggleLangFun } = toggleSlice.actions;

export default toggleSlice.reducer;