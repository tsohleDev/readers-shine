import bookReducer, { add, remove } from './books';

describe('booksReducer', () => {
  it('should return the initial state', () => {
    expect(bookReducer([], {})).toEqual([]);
  });

  it('should handle ADD_BOOK', () => {
    const state = [];
    const book = { id: 0, title: 'Test' };

    expect(bookReducer(state, add(book))).toEqual([{ id: 0, title: 'Test' }]);
  });

  it('should handle REMOVE_BOOK', () => {
    const state = [{ id: 0, title: 'Test' }, { id: 1, title: 'Test' }, { id: 2, title: 'Test' }];

    expect(bookReducer(state, remove(1)).length).toEqual(2);
  });

  it('REMOVE_BOOK removes correct book', () => {
    const state = [{ id: 0, title: 'Test' }, { id: 1, title: 'Test' }, { id: 2, title: 'Test' }];

    expect(bookReducer(state, remove(1))).toEqual([{ id: 0, title: 'Test' }, { id: 1, title: 'Test' }]);
  });
});
