import { Routes, Route } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/Categories';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/about" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
