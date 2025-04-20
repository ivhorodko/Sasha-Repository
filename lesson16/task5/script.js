let dailyTasks = ["уборка", "работа", "спорт", "учеба"];
let urgentTaskCount = 0;
let hasWorkTask = false;

function checkTaskPriority(taskName) {
    if (taskName === "работа" || taskName === "учеба") {
        urgentTaskCount++;
    }

    if (taskName === "работа") {
        hasWorkTask = true;
        return `Срочная задача: ${taskName}`;
    } else if (taskName === "учеба") {
        return `Срочная задача: ${taskName}`;
    }
}

for (let task = 0; task < dailyTasks.length; task++) {
    let result = checkTaskPriority(dailyTasks[task]);
    if (result) {
        console.log(result);
    } else {
        console.log(`Задача: ${dailyTasks[task]}`);
    }
}

dailyTasks.push("работа");


for (let index = 0; index < dailyTasks.length; index++) {
    let result = checkTaskPriority(dailyTasks[index]);
    if (result) {
        console.log(result);
    } else {
        console.log(`Задача: ${dailyTasks[index]}`);
    }
}

console.log(`Срочных задач: ${urgentTaskCount}`);
console.log(`Есть рабочая задача? ${hasWorkTask}`);