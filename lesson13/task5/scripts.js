let totalPoints = 0;
let hasBonus = false;

function getPointsForLevel(level) {
    if (level < 4) {
        return 10;
    } else {
        return 15;
    }
}

for (let level = 1; level <= 5; level++) {
    totalPoints += getPointsForLevel(level);
    if (level === 3) {
        hasBonus = true;
    }
    if (totalPoints > 40 && hasBonus === true) {
        console.log("Уровень " + level + ": Победа! Очков: " + totalPoints);
    } else {
        console.log("Уровень " + level + ": Продолжай! Очков: " + totalPoints);
    }
}