let workouts = [
    {
        name: "running",
        duration: 30,
        intensity: 5,
    },
    {
        name: "rollerblading",
        duration:  45,
        intensity: 2,
    },
    {
        name: "swimming",
        duration:  60,
        intensity: 4,
    },
    {
        name: "bicycle",
        duration:  80,
        intensity: 3
    }
];

function calculateLoad (duration, intensity) {
    return duration * intensity;
};

let highLoadCount = 0;

workouts.forEach((workout) => {
    if (calculateLoad(workout.duration, workout.intensity) > 200 ) {
        console.log (`High load: ${workout.name} with load ${(workout.highLoadCount)}`);
        highLoadCount++;
    } else if (calculateLoad (workout.highLoadCount) > 100 && calculateLoad (workout.highLoadCount) <= 200) {
        console.log (`Medium  load: ${workout.name} with load ${workout.highLoadCount}`);
    } else {
        console.log (`Low  load: ${workout.name} with load ${workout.highLoadCount}`);
    }
});

console.log (`Total number of high load workouts: ${highLoadCount}`);