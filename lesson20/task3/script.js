let students = [
    {
        name: "Artem",
        tasksCompleted: 4
    },
    {
        name: "Denis",
        tasksCompleted: 1
    },
    {
        name: "Arina",
        tasksCompleted: 7
    },
    {
        name: "Max",
        tasksCompleted: 2
    },
];

function isActive(tasks) {
    if (tasks > 3) {
        return true;
    } else {
        return false;
    }
};

let activeCount = 0;

students.forEach((student) => {
    if (isActive(student.tasksCompleted)) {
        console.log(`Active student: ${student.name}, tasks completed: ${student.tasksCompleted}`);
        activeCount++;
    } else {
        console.log(`Inactive student: ${student.name}, tasks completed: ${student.tasksCompleted}`);
    }
});

console.log(`Total number of active students: ${activeCount}`); цы