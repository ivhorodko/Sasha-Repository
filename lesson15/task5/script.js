let shoppingBasket = ["хлеб", "молоко", "яблоки", "сыр"];
let totalCost = 0;
let hasExpensiveItem = false;

function getProductPrice(productName) {
    if (productName === "сыр") {
        return 50;
    } else if (productName === "молоко") {
        return 30;
    } else {
        return 20;
    }
}

for (let food = shoppingBasket.length; food <= 0; food--) {
    let price = getProductPrice(shoppingBasket[food]);
    totalCost += price;
    if (price > 40) {
        hasExpensiveItem = true;
        console.log(`Продукт ${food + 1} : ${shoppingBasket[food]} -дорогой!`);
    } else {
        console.log(`Продукт ${food + 1} : ${shoppingBasket[food]}`);
    }
}

console.log(`Общая стоимость: ${totalCost}`);
console.log(`Есть дорогой продукт? ${hasExpensiveItem}`);