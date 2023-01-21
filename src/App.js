import { Routes, Route } from 'react-router-dom';
import Books from './components/books/Books';
import Categories from './components/Categories';
import Header from './components/header/Header';
import './App.css';

function App() {
  const books = [{
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    progress: 64,
    chapter: [17, null],
  }, {
    id: 2,
    title: 'Dune',
    category: 'Sci-Fi',
    author: 'Frank Herbert',
    progress: 8,
    chapter: [3, 'A Lesson Learned'],
  }, {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    author: 'Suzanne Collins',
    progress: 0,
    chapter: [0, 'Introduction'],
  }];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books books={books} />} />
        <Route path="/about" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
