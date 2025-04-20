let products = [
    { name: "молоко", price: 60, stock: 10 },
    { name: "хлеб", price: 30, stock: 5 },
    { name: "яйца", price: 80, stock: 8 }
  ];
  
  let totalValue = 0;
  
  function calculateValue(price, stock) {
    return price * stock;
  }
  
  for (let i = 0; i < products.length; i++) {
    let value = calculateValue(products[i].price, products[i].stock);
    console.log(`${products[i].name}: ${value}`);
    totalValue += value;
  }
  
  console.log(`Общая стоимость склада: ${totalValue}`);