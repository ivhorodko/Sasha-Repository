let schoolSubjects = ["математика", "русский", "физика", "литература"];
for (let subject = 0; subject < schoolSubjects.length; subject++) {
    console.log(`Предмет  ${subject + 1}  : ${schoolSubjects[subject]}`);
}
schoolSubjects.push("история");
console.log("Всего предметов: " + schoolSubjects.length);