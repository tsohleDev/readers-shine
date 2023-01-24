import { createSlice, configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './catefories/categories';

const reducer = {
  books: bookReducer,
  categories: categoriesReducer,
};

const bookSlice = createSlice({
  name: 'clerk',
  initialState: [],
  reducer,
});

const store = configureStore({
  reducer: bookSlice.reducer,
});

export default store;
