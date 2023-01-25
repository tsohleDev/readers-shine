const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

function removeBook(state, id) {
  if (id >= state.length) return state;

  return state.filter((book) => book.id !== id);
}

function addBook(state, book) {
  return [...state, book];
}

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return addBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    default:
      return state;
  }
}

export const add = (book) => ({ type: ADD_BOOK, book });
export const remove = (id) => ({ type: REMOVE_BOOK, id });
