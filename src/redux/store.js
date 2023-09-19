// store.js
import { configureStore } from '@reduxjs/toolkit';
import modelCustomizationReducer from './modelCustomizationSlice';
import materialsReducer from './materialsSlice';

const store = configureStore({
  reducer: {
    modelCustomization: modelCustomizationReducer,
    materials: materialsReducer,
  },
});

export default store;
