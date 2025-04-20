let bookColecton = [
  {name: Сказки, genre: детский},
  {name: Роман, genre: любовный},
  {name: Детектив, genre: криминал}
];

function displayBook(book, _) {
  console.log (`Книга: ${book.name}, жанр: ${book.genre}`);
}

bookColecton.forEach(displayBook);