// slices/appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  items: {
    laces: '',
    mesh: '',
    caps: '',
    inner: '',
    sole: '',
    stripes: '',
    band: '',
    patch: '',
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
