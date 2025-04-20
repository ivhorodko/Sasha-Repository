let books = [
    {
        title: "Сказки",
        pages: 150,
        year: 2010
    },
    {
        title: "Роман",
        pages: 400,
        year: 2015
    },
    {
        title: "Детектив",
        pages: 300,
        year: 2020
    },
    {
        title: "Фантастика",
        pages: 600,
        year: 2018
    },
    {
        title: "Поэзия",
        pages: 100,
        year: 2012
    }
];

let currentYear = 2025;

function getAveragePagesPerYear(pages, year) {
    let yearsPassed = currentYear - year;
    return (pages / yearsPassed).toFixed(2);
};

let volumeCount = 0;

for (let i = 0; i < books.length; i++) {
    let averagePagesCount = getAveragePagesPerYear(books[i].pages, books[i].year);
    if (averagePagesCount > 50) {
        console.log(`Объёмная книга: "${books[i].title}", в среднем ${averagePagesCount} стр./год`);
        volumeCount++;
    } else if (averagePagesCount > 20 && averagePagesCount <= 50) {
        console.log(`Книга средней длины: "${books[i].title}", в среднем ${averagePagesCount} стр./год`);
    } else {
        console.log(`Короткая книга: "${books[i].title}", в среднем ${averagePagesCount} стр./год`);
    }
}

console.log(`Общее количество объёмных книг: ${volumeCount}`);