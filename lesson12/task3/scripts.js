let totalScore = 0;

function getRoundPoints(round) {
    if (round < 3) {
        return 5;
    }
    if (round >= 3) {
        return 10;
    }

}

for (let round = 1; round <= 4; round++) {
    totalScore += getRoundPoints(round);

    if (totalScore > 15) {
        console.log("Раунд " + round + ":Победа! Очков: " + totalScore);
    } else {
        console.log("Раунд " + round + ":Продолжай! Очков: " + totalScore);
    }
}