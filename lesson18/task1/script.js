let tripList = [
    {
        city: "Париж",
        distance: 1200
    },
    {
        city: "Лондон",
        distance: 800
    },
    {
        city: "Рим",
        distance: 1500
    },
    {
        city: "Милан",
        distance: 900
    }
];

let totalDistance = 0;
let farTripCount = 0;

function isFarTrip(trip) {
    if (trip.distance > 1000) {
        return true;
    } else {
        return false;
    }
}

function analyzeTrip(trip, _) {
    totalDistance += trip.distance;
    if (isFarTrip(trip)) {
        farTripCount++;
        console.log(`Дальняя поездка: ${trip.city}, расстояние: ${trip.distance}`);
    } else {
        console.log(`Поездка: ${trip.city}, расстояние: ${trip.distance}`);
    }
}

tripList.forEach(analyzeTrip);

console.log(`Общее расстояние: ${totalDistance}`);
console.log(`Дальних поездок: ${farTripCount}`);