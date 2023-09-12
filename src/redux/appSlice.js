// slices/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  items: {
    laces: '#ffffff',
    mesh: '#ffffff',
    caps: '#ffffff',
    inner: '#ffffff',
    sole: '#ffffff',
    stripes: '#ffffff',
    band: '#ffffff',
    patch: '#ffffff',
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setItemColor: (state, action) => {
      const { item, color } = action.payload;
      state.items[item] = color;
    },
  },
});

export const { setCurrent, setItemColor } = appSlice.actions;
export default appSlice.reducer;
