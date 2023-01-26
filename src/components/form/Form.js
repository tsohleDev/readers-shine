import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from '../../redux/books/books';
import './Form.css';

function Form() {
  const [book, setBook] = useState({
    category: 'Action',
    progress: 0,
    chapter: [0, 'Introduction'],
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
          onChange={(e) => {
            setBook({ ...book, title: e.target.value });
          }}
        />
        <input
          className="input-author"
          type="text"
          placeholder="Author"
          onChange={(e) => {
            setBook({ ...book, author: e.target.value });
          }}
        />
        <button
          className="update-progress input-submit"
          type="button"
          onClick={() => {
            if (book.title && book.author) dispatch(add(book));
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
