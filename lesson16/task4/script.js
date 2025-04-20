let groceryCart = ["хлеб", "молоко", "яблоки", "мясо"];
let totalPrice = 0;

function calculatePrice(productName) {
    if (productName === "мясо") {
        return 100;
    } else if (productName === "молоко") {
        return 50;
    } else {
        return 30;
    }
}

for (let food = 0; food < groceryCart.length; food++) {
    let price = calculatePrice(groceryCart[food]);
    totalPrice += price;
    if (price > 50) {
        console.log(`Продукт ${food + 1} : ${groceryCart[food]} -дорогой!`);
    } else {
        console.log(`Продукт ${food + 1} : ${groceryCart[food]}`);
    }
}
console.log(`Общая стоимость: ${totalPrice}`);