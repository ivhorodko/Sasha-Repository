const lessons = [
  { name: "математика", start: 9, duration: 1 },
  { name: "литература", start: 10, duration: 2 },
  { name: "физика", start: 13, duration: 1 }
];

let lateLessons = 0;

function getEndTime(start, duration) {
  return start + duration;
}

lessons.forEach((lesson) => {
  let endTime = getEndTime(lesson.start, lesson.duration);
  console.log(`${lesson.name} заканчивается в ${endTime}:00`);

  if (endTime > 12) {
    lateLessons++;
  }
});

console.log(`Поздних уроков: ${lateLessons}`);