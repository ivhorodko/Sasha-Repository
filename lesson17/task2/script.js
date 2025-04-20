let  bookCollection = [
    {
        title: "Сказки",
        genre: "детский",
    },
    {
        title: "Роман",
        genre: "любовный",
    },
    {
        title: "Дела житейские",
        genre: "криминал",
    }
]

function displayBook(book, i) {
    console.log(`Книга: ${book.title}, жанр: ${book.genre}`);
}

bookCollection.forEach((book, _) => {
    if (book.genre === "криминал") {
        console.log(`Книга найдена! Ёё название: ${book.title}`);
    }
}); //Анонимная функция