import { useSelector, useDispatch } from 'react-redux';
import { status } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="update-progress"
        type="button"
        onClick={() => {
          dispatch(status());
        }}
      >
        Check Status
      </button>
      <h1>{categories}</h1>
    </>
  );
}

export default Categories;
