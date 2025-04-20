let moodCount=0;
let mood="Хорошо";

function updateMood() {
    if(mood==="Хорошо") {
        mood="Плохо";
        moodCount=moodCount+1;
    } else {
        mood="Хорошо";
        moodCount=moodCount+1;
    }
    console.log("Настроение:"+mood+"\nИзменений:"+moodCount);
}
updateMood();
updateMood();
updateMood();
updateMood();
updateMood();