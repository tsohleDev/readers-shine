const g = [{
  item_id: 'The Hunger Games',
  title: 'The Hunger Games',
  category: 'Action',
  author: 'Suzanne Collins',
}, {
  item_id: 'Dune',
  title: 'Dune',
  category: 'Sci-Fi',
  author: 'Frank Herbert',
}, {
  item_id: 'Capital in the Twenty-First Century',
  title: 'Capital in the Twenty-First Century',
  category: 'Economy',
  author: 'Suzanne Collins',
}];

g.forEach(async (element) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zXlbR7440K7Pfq76Oi0U/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element),
  });
});
