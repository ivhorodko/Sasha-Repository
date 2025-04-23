let bookCollection = [
  {name: Сказки, genre: детский},
  {name: Роман, genre: любовный},
  {name: Детектив, genre: криминал}
];

function displayBook(book,number) {
  console.log(`Книга: ${book.name}, жанр: ${book.genre}, ${number + 1}`);
}

bookCollection.forEach(displayBook);