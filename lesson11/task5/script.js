let level=3;
let hasBonus=false;

function getLevelMassage() {
    if (level>5 && hasBonus===true) {
        return "Высокий уровень с бонусом.";
    } 
    if (level<=5 || hasBonus===false) {
        return "Обычный уровень.";
    }
}
console.log("Результат:"+getLevelMassage());