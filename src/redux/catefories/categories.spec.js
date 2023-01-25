import categoriesReducer, { status } from './categories';

describe('categoriesReducer', () => {
  it('should return the initial state', () => {
    expect(categoriesReducer([], {})).toEqual([]);
  });

  it('should handle CHECK_STATUS', () => {
    const state = [];

    expect(categoriesReducer(state, status())).toEqual('Under construction');
  });
});
