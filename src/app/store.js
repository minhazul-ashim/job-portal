import { configureStore } from '@reduxjs/toolkit';
import userDataSlice from '../features/slices/userDataSlice';

export const store = configureStore({
  reducer: {

    user: userDataSlice
  },
});
