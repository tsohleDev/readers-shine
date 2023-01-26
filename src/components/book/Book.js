import Props from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch } from 'react-redux';
import { remove } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

function Book(props) {
  const dispatch = useDispatch();
  const { book } = props;
  const {
    id, title, category, author, progress, chapter,
  } = book;
  const [chapterNumber, chapterTitle] = chapter;
  return (
    <div className="book">
      <div className="credential">
        <h6>{category}</h6>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <div>
          <button type="button" className="buttons">
            {' '}
            <span className="material-icons primary-color">comment</span>
            {' '}
          </button>
          <button
            type="button"
            className="buttons"
            onClick={() => {
              dispatch(remove(id));
            }}
          >
            {' '}
            <span className="material-icons primary-color">delete</span>
            {' '}
          </button>
          <button type="button" className="buttons">
            {' '}
            <span className="material-icons primary-color">edit</span>
            {' '}
          </button>
        </div>
      </div>
      <div className="progress">
        <CircularProgressbar value={progress} />

        <div className="progress-percentage">
          <h2>
            {progress}
            %
          </h2>
          <pre>Completed</pre>
        </div>
      </div>
      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <h5>{`${chapterNumber ? `Chapter ${chapterNumber}` : ''} ${chapterNumber && chapterTitle ? ' : ' : ''}  ${chapterTitle || ''}`}</h5>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: Props.shape({
    id: Props.number.isRequired,
    title: Props.string.isRequired,
    category: Props.string.isRequired,
    author: Props.string.isRequired,
    progress: Props.number.isRequired,
    chapter: Props.arrayOf(Props.oneOfType([Props.number, Props.string])).isRequired,
  }).isRequired,
};

export default Book;
