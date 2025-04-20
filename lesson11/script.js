let expirience=4;
let hasGear=true;
let isHealthy=false;

function canStartMission() {
    if (expirience>=5 && hasGear===true && isHealthy===true) {
        return "Миссия разрешена!";
    } else {
        return "Миссия отклонена!";
    }
}
console.log("Статус миссии:"+canStartMission());