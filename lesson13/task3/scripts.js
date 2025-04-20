let totalFood = 0;

function getFoodForDay(day) {
    if (day < 3) {
        return 2;
    } else {
        return 3;
    }
}

for (let day = 1; day <= 5; day++) {
    totalFood += getFoodForDay(day);
    console.log("День " + day + ":Еды: " + totalFood + "кг ");
}