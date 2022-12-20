import {configureStore} from '@reduxjs/toolkit';
import Item from './Item';

const store = configureStore({
  reducer: {Item},
});
export default store;
