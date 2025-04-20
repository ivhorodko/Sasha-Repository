let orders = [
    {
        name: "power bank",
        price: 2500,
        weight: 0.4
    },
    {
        name: "desk lamp",
        price: 500,
        weight: 0.7
    },
    {
        name: "headphones",
        price: 1200,
        weight: 0.1
    },
    {
        name: "phone",
        price: 14000,
        weight: 0.2
    },
    {
        name: "TV",
        price: 30850,
        weight: 3
    }
];

function calculateDelivery(price, weight) {
    if (price > 10000) {
        return 0;
    } else if (weight < 1) {
        return 50;
    } else {
        return weight * 100;
    }
};

let expensiveOrders = 0;

for (let i = 0; i < orders.length; i++) {
    console.log (`Product name: ${orders[i].name}, final price: ${orders[i].price}`);
    if (orders[i].price > 10000) {
        expensiveOrders++;
    }
};

console.log (`Total number of expensive order: ${expensiveOrders}`);