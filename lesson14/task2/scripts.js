let bookShelf = ["Сказки", "Роман", "Детектив", "Фантастика", "Фантастика", "Фантастика", "Фантастика"];

for (let book = 0; book < bookShelf.length; book++) {
    console.log("Книга " + book + 1 + ": " + bookShelf[book]);
}
bookShelf.push("Поэзия");
console.log("Всего книг: " + bookShelf.length);