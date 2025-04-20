let totalPages = 0;
for (let page = 1; page <= 4; page++) {
    totalPages = totalPages + 30;
    if (totalPages > 60) {
        console.log("Книга " + page + ":Много страниц! Всего: " + totalPages);
    } else {
        console.log("Книга " + page + ":Читай дальше! Всего: " + totalPages);
    }
}