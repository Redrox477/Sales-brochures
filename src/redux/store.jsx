import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/reducers';

const store = configureStore({
  reducer: formReducer,
  // You can also provide other options like middleware, dev tools configuration, etc. if needed.
});

export default store;