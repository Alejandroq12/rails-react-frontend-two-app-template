import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../slices/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
