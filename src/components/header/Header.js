import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <h1>Readers Shine</h1>
      <nav>
        <ul>
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/about">CATEGORIES</Link></li>
        </ul>
      </nav>
      <button type="button">
        <span className="material-icons primary-color">person</span>
      </button>
    </header>
  );
}

export default Header;
