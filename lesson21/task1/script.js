let libraries = [
  {
    name: "Городская",
    departments: [
      {
        name: "Детский",
        shelves: [
          {
            number: 1,
            books: [
              {
                title: "Сказки",
                author: "Пушкин"
              },
              {
                title: "Загадки",
                author: "Чуковский"
              }
            ]
          }
        ]
      },
      {
        name: "Взрослый",
        shelves: [
          {
            number: 2,
            books: [
              {
                title: "Роман",
                author: "Толстой"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Школьная",
    departments: [
      {
        name: "Учебный",
        shelves: [
          {
            number: 1,
            books: [
              {
                title: "Математика",
                author: "Петров"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Университетская",
    departments: [
      {
        name: "Научный",
        shelves: [
          {
            number: 1,
            books: [
              { title: "Физика", author: "Эйнштейн" }
            ]
          }
        ]
      }
    ]
  }
];

console.log(`Первая книга из первого отдела первой библиотеки: ${libraries[0].departments[0].shelves[0].books[0].title} Автор: ${libraries[0].departments[0].shelves[0].books[0].author}`);

console.log(`Первая книга из второго отдела первой библиотеки: ${libraries[0].departments[1].shelves[0].books[0].title} Автор: ${libraries[0].departments[1].shelves[0].books[0].author}`);

console.log(`Первая книга из первой полки второй библиотеки:${libraries[1].departments[0].shelves[0].books[0].title} Автор: ${libraries[1].departments[0].shelves[0].books[0].author}`);

console.log(`Первая книга из первой полки третьей библиотеки: ${libraries[2].departments[0].shelves[0].books[0].title}Автор: ${libraries[2].departments[0].shelves[0].books[0].author}`);