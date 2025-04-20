let fruits = [
    { name: "яблоко", count: 5 },
    { name: "банан", count: 3 },
    { name: "груша", count: 2 }
  ];
  
  let totalCount = 0;
  
  function getCount(fruit) {
    return fruit.count;
  }
  
  for (let i = 0; i < fruits.length; i++) {
    totalCount += getCount(fruits[i]);
    console.log(`${fruits[i].name}: ${fruits[i].count}`);
  }
  
  console.log (`Общее количество: ${totalCount}`);