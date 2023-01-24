function removeBook(state, id) {
  if (id === state.length - 1) return state.slice(0, id);

  if (id === 0) return state.slice(1);

  return [...state.slice(0, id), ...state.slice(id + 1)];
}

function addBook(state, book) {
  return [...state, book];
}

export default function bookReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_BOOK':
      return addBook(state, action.book);
    case 'REMOVE_BOOK':
      return removeBook(state, action.id);
    default:
      return state;
  }
}

export const add = (book) => ({ type: 'ADD_BOOK', book });
export const remove = (id) => ({ type: 'REMOVE_BOOK', id });
