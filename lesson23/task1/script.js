let bookCollection = [
  {name: Сказки, genre: детский},
  {name: Роман, genre: любовный},
  {name: Детектив, genre: криминал}
];

function displayBook(book, _) {
  console.log(`Книга: ${book.name}, жанр: ${book.genre}`);
}

bookCollection.forEach(displayBook);