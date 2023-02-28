import { createSlice } from '@reduxjs/toolkit';

const initialUiState = {
    isCartShown: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.isCartShown = !state.isCartShown;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
