import { createSlice } from '@reduxjs/toolkit';
import * as reducers from './actions';

const initialState = {
  selectedRoute: 'Dashboard',
};

const settingsSlice = createSlice({name: 'settings', initialState, reducers});

export const { routeChanged } = settingsSlice.actions;

export default settingsSlice.reducer;
