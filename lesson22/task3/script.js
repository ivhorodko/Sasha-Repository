let students = [
    { name: "Маша", grade: 5 },
    { name: "Петя", grade: 3 },
    { name: "Саша", grade: 4 }
];

let goodStudents = 0;

function isGoodStudent(grade) {
    if (grade >= 4) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < students.length; i++) {
    if (isGoodStudent(students[i].grade)) {
        console.log(`${students[i].name}: хорошист`);
        goodStudents++;
    } else {
        console.log(`${students[i].name}: не хорошист`);
    }
}

console.log(`Хороших студентов: ${goodStudents}`);