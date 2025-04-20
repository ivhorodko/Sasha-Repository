let groceryBasket = [
    {
        name: "хлеб",
        price: 30
    },
    {
        name: "молоко",
        price: 50
    },
    {
        name: "яблоки",
        price: 40
    },
    {
        name: "сыр",
        price: 70
    }
];
let totalPrice = 0;

function isExpensive(price) {
    if (price > 50) {
        return true;
    } else {
        return false;
    }
}

function checkProduct(grocery, i) {
    totalPrice += grocery.price;
    if (isExpensive(grocery.price)) {
        console.log(`Дорогой продукт: ${grocery.name}, цена: ${grocery.price} `);
    } else {
        console.log(`Продукт: ${grocery.name}, цена: ${grocery.price} `);

    }
}

groceryBasket.forEach(checkProduct);
console.log(`Общая стоимость: ${totalPrice}`);