import bookReducer, { add } from './books';

describe('booksReducer', () => {
  it('should return the initial state', () => {
    expect(bookReducer([], {})).toEqual([]);
  });

  it('should handle ADD_BOOK', () => {
    const state = [];
    const book = { id: 0, title: 'Test' };

    expect(bookReducer(state, add(book))).toEqual([{ id: 0, title: 'Test' }]);
  });
});
