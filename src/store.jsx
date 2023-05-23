import { configureStore } from '@reduxjs/toolkit';
import starsSlice from 'src/redux/starsSlice';

export const store = configureStore({
  reducer: {
    stars: starsSlice,
  },
});
