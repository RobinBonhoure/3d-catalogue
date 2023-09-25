import { createSlice } from '@reduxjs/toolkit';

const positionSlice = createSlice({
  name: 'position',
  initialState: false, // Initialize the state as false (down) by default
  reducers: {
    setPositionUp: (state) => true, // Set the position to "up"
    setPositionDown: (state) => false, // Set the position to "down"
  },
});

export const { setPositionUp, setPositionDown } = positionSlice.actions;
export default positionSlice.reducer;