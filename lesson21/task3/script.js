let employees = [
    {
        name: "Анна",
        startYear: 2018,
        position: "менеджер"
    },
    {
        name: "Игорь",
        startYear: 2020,
        position: "разработчик"
    },
    {
        name: "Ольга",
        startYear: 2015,
        position: "дизайнер"
    },
    {
        name: "Максим",
        startYear: 2022,
        position: "разработчик"
    }
];

let currentYear = 2025;

function getExperience(startYear) {
    return currentYear - startYear;
}

let experiencedCount = 0;

employees.forEach((employee) => {
    let experience = getExperience(employee.startYear);

    if (experience > 5) {
        console.log(`${employee.name},${employee.position}, стаж: ${experience} лет (опытный)`);
        experiencedCount++;
    } else if (experience > 2 && experience <= 5) {
        console.log(`${employee.name}, ${employee.position}, стаж: ${experience} лет (средний)`);
    } else {
        console.log(`${employee.name}, ${employee.position}, стаж: ${experience} лет (новичок)`);
    }
});

console.log(`Общее количество опытных сотрудников: ${experiencedCount}`);