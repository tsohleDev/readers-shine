import './Form.css';

function Form() {
  return (
    <div className="form">
      <h3 className="form-title">ADD NEW BOOK</h3>
      <form>
        <input className="input-book" type="text" placeholder="Book Title" />
        <input className="input-author" type="text" placeholder="Author" />
        <button className="update-progress input-submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
