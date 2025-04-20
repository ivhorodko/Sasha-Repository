let energy=70;
let isRested=true;

function canRun() {
    if (energy>50 || isRested===true) {
        console.log("Можешь бежать!");
    } else {
        console.log("Отдохни!");
    }
}
canRun();