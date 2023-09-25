// store.js
import { configureStore } from '@reduxjs/toolkit';
import modelCustomizationReducer from './modelCustomizationSlice';
import positionReducer from './positionSlice';

const store = configureStore({
  reducer: {
    modelCustomization: modelCustomizationReducer,
    position: positionReducer,
  },
});

export default store;
