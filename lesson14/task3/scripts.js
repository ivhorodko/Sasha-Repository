let fridge = ["яблоко", "молоко", "сыр", "хлеб", "банан"];
let hasHealthyFood = false;
let hasDairy = false;

function checkProduct(productName) {

    if (productName === "яблоко" || productName === "банан") {
        hasHealthyFood = true;
        return "Здоровый продукт: " + productName;
    }

    if (productName === "молоко" || productName === "сыр") {
        hasDairy = true;
        return "Молочный продукт: " + productName;
    } else {
        return "Продукт: " + productName;
    }

}

for (let food = 0; food < fridge.length; food++) {
    console.log(checkProduct(fridge[food]));
}
console.log("Есть здоровая еда? " + hasHealthyFood);
console.log("Есть молочные продукты? " + hasDairy);