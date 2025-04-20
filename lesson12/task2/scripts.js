let totalSteps=0;
for(let day=1; day<=5; day++) {
    totalSteps=totalSteps+20;
    if (totalSteps>50) {
        console.log("День "+day+":Хорошая прогулка! Шагов: "+totalSteps);
    } else {
        console.log("День "+day+":Прогуляйся больше! Шагов: "+totalSteps);
    }
}