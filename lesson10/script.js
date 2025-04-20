let temperature=25;
let steps=100;
let hasEnergy=true;

function getTemperatureMessage() {
    if (temperature>20) {
        return "Жарко!";
    } else {
        return "Прохладно!";
    }
} 


function addSteps(amount) {
    steps=steps+amount;
    return steps;
}

function checkStepsAndEnergy() {
    if (steps>=200 && hasEnergy===true) {
        console.log("Молодец! Ты прошёл много и полон энергии!");
    } 
    if (steps<200 || hasEnergy===false) {
        console.log("Старайся больше или отдохни!");
    }
}

console.log("Температура:"+getTemperatureMessage());
console.log("Ты прошёл:"+addSteps(50)+"шагов");
checkStepsAndEnergy();
hasEnergy=false;
console.log("Ты прошёл:"+addSteps(70)+"шагов");
checkStepsAndEnergy();