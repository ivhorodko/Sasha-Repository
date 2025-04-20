let studentGrades = [5, 5, 4, 4];
let hasLowGreade =  false;
let hasHightGrade = false;

for (let grade = 0; grade < studentGrades.length; grade++) {
    if (studentGrades[grade] < 3) {
        hasLowGreade = true;
    } else if (studentGrades[grade] >= 5) {
        hasHightGrade = true;
    }
    console.log(`Оценка ${grade + 1} : ${studentGrades[grade]}`);
}
studentGrades.push(5);
console.log(`Ест низкая оценка? ${hasLowGreade}`);
console.log(`Есть высокая оценка? ${hasHightGrade}`);