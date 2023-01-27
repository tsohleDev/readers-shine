const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zXlbR7440K7Pfq76Oi0U/books';

export const get = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const books = Object.values(data).reduce((array, oldBook) => {
    const book = oldBook[0];
    const newbook = {
      id: array.length, ...book, progress: 0, chapter: [0, 'Introduction'],
    };
    return [...array, newbook];
  }, []);

  return books;
};

export const delet = async (title) => {
  const response = await fetch(`${url}/${title}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.status;
};

export const post = async (book) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  return response.status === 201 ? book : null;
};
