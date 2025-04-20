let partyGuests = ["Аня", "Лена", "Дима"];
let hasBestFriend = false;

if (partyGuests[1] === "Миша") {
    hasBestFriend = true;
    console.log(`Лучший друг на вечеринке`);
} else {
    console.log(`Лучшего друга нет`);
}
partyGuests[2] = "Света";
partyGuests.push("Коля");
console.log(`Первый гость: ${partyGuests[0]}`);
console.log(`Все гости: ${partyGuests}`);
console.log(`Есть лучший друг? ${hasBestFriend}`);


if (null) {
    console.log(`тру`);
} else {
    console.log(`фолс`);
}