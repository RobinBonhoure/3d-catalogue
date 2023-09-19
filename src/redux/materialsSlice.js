import { createSlice } from '@reduxjs/toolkit';

const materialsSlice = createSlice({
  name: 'materials',
  initialState: [],
  reducers: {
    setAOMapMaterial: (state, action) => {
      state.aomapMaterial = action.payload;
    },
  },
});

export const { setAOMapMaterial } = materialsSlice.actions;
export default materialsSlice.reducer;