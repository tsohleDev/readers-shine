import initial from './initial';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

function removeBook(state, id) {
  let array = [...state.slice(0, id), ...state.slice(id + 1)];
  array = array.reduce((acc, book, index) => {
    const newbook = { ...book, id: index };
    return [...acc, newbook];
  }, []);

  return array;
}

function addBook(state, book) {
  const newbook = { ...book, id: state.length };
  return [...state, newbook];
}

export default function bookReducer(state = initial, action) {
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
