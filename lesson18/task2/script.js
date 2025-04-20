let orderList = [
    {
        product: "телефон",
        price: 15000
    },
    {
        product: "наушники",
        price: 3000
    },
    {
        product: "планшет",
        price: 12000
    },
    {
        product: "часы",
        price: 8000
    },
    {
        product: "клавиатура",
        price: 2000
    }
];

let totalCost = 0;
let hasExpensiveOrder = false;

function isDiscountAvailable(price) {
    if (price > 10000) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscount(price) {
    if (price > 10000) {
        return price * 0.9;
    } else {
        return price;
    }
}

function processOrder(order, _) {
    if (isDiscountAvailable(order.price)) {
        hasExpensiveOrder = true;
        console.log(`Дорогой заказ: ${order.product}, цена со скидкой: ${calculateDiscount(order.price)}`);
    } else {
        console.log(`Заказ: ${order.product} цена: ${order.price}`);
    }
    totalCost += order.price;
}

orderList.forEach(processOrder);

console.log(`Общая стоимость: ${totalCost}`);
console.log(`Есть дорогой заказ? ${hasExpensiveOrder}`);