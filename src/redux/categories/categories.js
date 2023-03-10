const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
}

export const status = () => ({ type: CHECK_STATUS });
