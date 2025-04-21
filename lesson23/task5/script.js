let students = [
  { name: "Маша", grade: 5 },
  { name: "Петя", grade: 3 },
  { name: "Саша", grade: 4 }
];

let topStudents = 0;

function isTopStudent(grade) {
  return grade >= 4;
}

for (let i = 0; i < students.length; i++) {
  let status = isTopStudent(students[i].grade) ? "отличник" : "не отличник";
  console.log(`${students[i].name}: оценка ${students[i].grade}, ${status}`);

  if (isTopStudent(students[i].grade)) {
    topStudents++;
  }
}

console.log(`Количество отличников: ${topStudents}`);