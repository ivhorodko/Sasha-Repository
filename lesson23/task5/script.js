let students = [
  { name: "Маша", grade: 5, status: "отличник"},
  { name: "Петя", grade: 3, status: "не отличник"},
  { name: "Саша", grade: 4, status: "отличник"}
];

let topStudents = 0;

function isTopStudent(grade) {
  return grade >= 4;
}

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].name}: оценка ${students[i].grade}, ${students[i].status}`);

  if (isTopStudent(students[i].grade)) {
    topStudents++;
  }
}

console.log(`Количество отличников: ${topStudents}`);