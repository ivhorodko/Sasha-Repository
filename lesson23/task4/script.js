let workouts = [
  { name: "бег", duration: 30, intensity: 5 },
  { name: "йога", duration: 60, intensity: 2 },
  { name: "плавание", duration: 45, intensity: 4 }
];

let highLoadCount = 0;

function calculateLoad(duration, intensity) {
  return duration * intensity;
}

for (let i = 0; i < workouts.length; i++) {
  let load = calculateLoad(workouts[i].duration, workouts[i].intensity);
  console.log(`${workouts[i].name}: нагрузка ${load} интенсивность: ${workouts[i].intensity}`);

  if (load > 150) {
    highLoadCount++;
  }
}

console.log(`Тренировок с высокой нагрузкой: ${highLoadCount}`);