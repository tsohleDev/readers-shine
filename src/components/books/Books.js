import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../../redux/books/books';
import Book from '../book/Book';
import Form from '../form/Form';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks({ method: 'GET' }));
  }, [dispatch]);

  return (
    <>
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>

      <Form />
    </>
  );
}

export default Books;
