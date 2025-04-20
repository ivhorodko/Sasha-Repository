let mammalsList = ["koala", "tiger", "zebra", "gorilla", "turtle"];
let longNameCount = 0;

function IsNameLong(name){
    if (name.length > 5) {
        return true;
    } else {
        return false;
    }
}

for (let mammal = 0; mammal < mammalsList.length; mammal++) {
    if (IsNameLong(mammalsList[mammal])) {
        console.log(`The name is long: ${mammalsList[mammal]}`);
        longNameCount++;
    } else {
        console.log(`The name is short: ${mammalsList[mammal]}`);
    }
}

console.log(`Total animal with long names: ${longNameCount}`);