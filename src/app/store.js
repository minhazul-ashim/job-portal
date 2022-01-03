import { configureStore } from '@reduxjs/toolkit';
import jobSlice from '../features/slices/jobSlice';
import userDataSlice from '../features/slices/userDataSlice';

export const store = configureStore({
  reducer: {

    user: userDataSlice,
    jobs: jobSlice
  },
});
