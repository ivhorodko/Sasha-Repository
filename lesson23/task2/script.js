let shoppingList = [
  {name: "молоко", price: 60, count: 2},
  {name: "хлеб", price: 30, count: 3},
  {name: "яблоки", price: 40, count: 5}
];

let totalCost = 0;

function calculateCost(price, count) {
  return price * count;
}

shoppingList.forEach((i) => {
  let cost = calculateCost(i.price, i.count);
  console.log(`${i.name} ${cost}`);
  totalCost += cost;
})


console.log(`Общая стоимость: ${totalCost}`);