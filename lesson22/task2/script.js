let items = [
    { name: "книга", price: 300 },
    { name: "тетрадь", price: 100 },
    { name: "ручка", price: 20 }
];

let totalPrice = 0;

function calculatePrice(price) {
    if (price > 100) {
        return price * 0.95;
    } else {
        return price;
    }
}

items.forEach((item) => {
    let itemPrice = calculatePrice(item.price);
    console.log(`Название: ${item.name}, цена: ${itemPrice}`);
    totalPrice += itemPrice;
});

console.log(`Итоговая стоимость: ${totalPrice}`);