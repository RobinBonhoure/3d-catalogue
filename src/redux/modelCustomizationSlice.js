import { createSlice } from '@reduxjs/toolkit';
import partsMaterials from '../data/partsMaterials'; // Import your partsMaterials object

// Define your dynamic item list
const itemList = ['comp_desk_c', 'comp_desk', 'comp_desk_b', 'comp_desk_a', 'comp_desk_2remote', 'comp_desk_1remote', 'comp_desk_button', 'comp_desk_remote', 'comp_desk_top'];

// Create an initial state object dynamically based on the item list and default materials
const initialState = {
  current: null,
  items: itemList.reduce((itemsObj, item) => {
    itemsObj[item] = {
      color: '',
      material: partsMaterials[item]?.default || '', // Initialize with the default material from partsMaterials
    };
    return itemsObj;
  }, {}),
};

// Create a reducer slice dynamically based on the item list
const modelCustomizationSlice = createSlice({
  name: 'modelCustomization',
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

export const { setCurrent, setItemColor, setItemMaterial } = modelCustomizationSlice.actions;
export default modelCustomizationSlice.reducer;