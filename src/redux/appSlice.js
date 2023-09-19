import { createSlice } from '@reduxjs/toolkit';

// Define your dynamic item list
const itemList = ['laces', 'mesh', 'caps', 'inner', 'sole', 'stripes', 'band', 'patch'];

// Create an initial state object dynamically based on the item list
const initialState = {
  current: null,
  items: itemList.reduce((itemsObj, item) => {
    itemsObj[item] = {
      color: '',
      material: 'default',
    };
    return itemsObj;
  }, {}),
};

// Create a reducer slice dynamically based on the item list
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