import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, { payLoad }) {
            state.value = payLoad;
        },
    },
});

export const { changeFilter } = filterSlice.actions;

export const getFilterValue = state => state.filter.value