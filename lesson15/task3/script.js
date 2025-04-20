let movieList = ["комеедия", "боевик", "драма", "фантастика"];
let hasFavoriteGenre = false;

for (let movie = 0; movie < movieList.length; movie++) {
    if (movieList[movie] === "фантастика") {
        hasFavoriteGenre = true;
        console.log(`Любимый жанр найден: ${movieList[movie]}`);
    } else {
        console.log(`Жанр ${movie + 1} : ${movieList[movie]}`);
    }
}
console.log(`Есть любимый жанр? ${hasFavoriteGenre}`);