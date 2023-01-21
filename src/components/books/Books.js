import Props from 'prop-types';
import Book from '../book/Book';
import Form from '../form/Form';

function Books(props) {
  const { books } = props;

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

Books.propTypes = {
  books: Props.arrayOf(Props.shape({
    id: Props.number.isRequired,
    title: Props.string.isRequired,
    category: Props.string.isRequired,
    author: Props.string.isRequired,
    progress: Props.number.isRequired,
    chapter: Props.arrayOf(Props.oneOfType([Props.number, Props.string])).isRequired,
  })).isRequired,
};

export default Books;
