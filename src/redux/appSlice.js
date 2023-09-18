import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  current: null,
  items: {
    laces: {
      color: '',
      material: '',
    },
    mesh: {
      color: '',
      material: '',
    },
    caps: {
      color: '',
      material: '',
    },
    inner: {
      color: '',
      material: '',
    },
    sole: {
      color: '',
      material: '',
    },
    stripes: {
      color: '',
      material: '',
    },
    band: {
      color: '',
      material: '',
    },
    patch: {
      color: '',
      material: '',
    },
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
      state.items[item].color = color;
    },
    setItemMaterial: (state, action) => {
      const { item, material } = action.payload;
      state.items[item].material = material;
    },
  },
});

export const { setCurrent, setItemColor, setItemMaterial } = appSlice.actions;
export default appSlice.reducer;