import { useSelector } from 'react-redux';
import Book from '../book/Book';
import Form from '../form/Form';

function Books() {
  const books = useSelector((state) => state.books);

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
