let gardenPlants = ["роза", "тюльпан", "кактус", "фиалка"];
let hasCactus = false;

function checkPlant(plantName) {
    if (plantName === "кактус") {
        hasCactus = true;
        return "Найден кактус!";
    } else {
        return `Растение: ${plantName}`;
    }
}

for (plant = 0; plant < gardenPlants.length; plant++) {
    console.log(checkPlant(gardenPlants[plant]));
}

console.log(`Есть кактус? ${hasCactus}`);