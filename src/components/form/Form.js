import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchBooks } from '../../redux/books/books';
import './Form.css';

function Form() {
  const [book, setBook] = useState({
    category: 'Action',
  });
  const dispatch = useDispatch();
  return (
    <div className="form">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form>
        <input
          className="input-book"
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={(e) => {
            setBook({ ...book, title: e.target.value, item_id: e.target.value });
          }}
        />
        <input
          className="input-author"
          type="text"
          placeholder="Author"
          value={book.author}
          onChange={(e) => {
            setBook({ ...book, author: e.target.value });
          }}
        />
        <button
          className="update-progress input-submit"
          type="button"
          onClick={() => {
            if (book.title && book.author) dispatch(fetchBooks({ method: 'POST', book }));
            setBook({ category: 'Action', title: '', author: '' });
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
