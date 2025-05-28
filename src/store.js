// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import avReducer from './avSlice'; // ✅ Import your AV reducer

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer, // ✅ Add the AV slice to your store
  },
});
