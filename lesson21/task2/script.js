let trips = [
    {
        name: "на дачу",
        distance: 50,
        transport: "легковая машина"
    },
    {
        name: "в город",
        distance: 20,
        transport: "мотоцикл"
    },
    {
        name: "на озеро",
        distance: 100,
        transport: "грузовик"
    },
    {
        name: "в деревню",
        distance: 80,
        transport: "легковая машина"
    },
    {
        name: "на работу",
        distance: 10,
        transport: "мотоцикл"
    }
];

function calculateFuelCost(distance, transport) {
    let fuelPrices = 50;
    let fuelConsumptionPer100km;

    if (transport === "легковая машина") {
        fuelConsumptionPer100km = 8;
    } else if (transport === "мотоцикл") {
        fuelConsumptionPer100km = 4;
    } else { 
        fuelConsumptionPer100km = 12;
    }

    let fuelUsed = (distance / 100) * fuelConsumptionPer100km;
    let cost = fuelUsed * fuelPrices;

    if (distance < 30) {
        cost += 100;
    }

    return Math.round(cost);
}

let longTripCount = 0;

for (let i = 0; i < trips.length; i++) {
    let trip = trips[i];
    let cost = calculateFuelCost(trip.distance, trip.transport);

    console.log(`${trip.name}: ${cost} рублей`);

    if (trip.distance > 50) {
        longTripCount++;
    }
}

console.log(`Дальних поездок: ${longTripCount}`);