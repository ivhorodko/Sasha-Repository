let tasks = [
    {
        name: "workout",
        hour: 7
    },
    {
        name: "studies",
        hour: 8
    },
    {
        name: "lunch",
        hour: 14
    },
    {
        name: "dishwashing",
        hour: 15
    },
    {
        name: "tutoring",
        hour: 18
    }
];

let hasAfternoonTask = false;

tasks.forEach((task) => {
    if (task.hour > 12) {
        console.log(`This task is in the afternoon: ${task.name} at this time: ${task.hour}:00`);
        hasAfternoonTask = true;
    } else {
        console.log(`This task is in morning: ${task.name} at this time: ${task.hour}:00`);
    }
});

console.log(`Are there any tasks in the afternoon?: ${hasAfternoonTask}`);