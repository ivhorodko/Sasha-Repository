let totalWater = 0;
let isHot = true;

for (let day = 1; day <= 4; day++) {
    totalWater++;
    if (totalWater < 3 || isHot === true) {
        console.log("День " + day + ": Возьми больше воды! Всего: " + totalWater + "литров ");
    } else {
        console.log("День " + day + ": Воды достаточно! Всего: " + totalWater + "литров ");
    }
}