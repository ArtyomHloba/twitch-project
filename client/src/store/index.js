import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {},
});

export default store;
