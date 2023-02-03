import { createAsyncThunk } from '@reduxjs/toolkit';
import { post, get, delet } from './booksAPI';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LIST_BOOKS = 'bookstore/books/LIST_BOOKS';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

function removeBook(state, title) {
  const array = state.reduce((acc, book) => {
    if (book.title !== title) {
      const newbook = { ...book, id: acc.length };
      return [...acc, newbook];
    }

    return acc;
  }, []);

  return array;
}

function addBook(state, book) {
  const newbook = { ...book, id: state.length };
  return [...state, newbook];
}

export const add = (book) => ({ type: ADD_BOOK, book });
export const remove = (id) => ({ type: REMOVE_BOOK, id });
export const list = (books) => ({ type: LIST_BOOKS, books });

export const fetchBooks = createAsyncThunk(
  GET_BOOKS,
  async (args, thunkAPI) => {
    try {
      let res;
      let books;
      let book;
      const progress = Math.floor(Math.random() * 100);
      switch (args.method) {
        case 'GET':
          books = await get();
          thunkAPI.dispatch(list(books));
          return books;
        case 'POST':
          res = await post(args.book);
          book = {
            id: thunkAPI.getState().length, ...res, progress, chapter: [0, 'Introduction'],
          };
          thunkAPI.dispatch(add(book));
          return book;
        case 'DELETE':
          await delet(args.title);
          thunkAPI.dispatch(remove(args.title));
          return null;
        default:
          return null;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error, args.method);
    }
  },
);

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return addBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    case LIST_BOOKS:
      return action.books;
    default:
      return state;
  }
}
