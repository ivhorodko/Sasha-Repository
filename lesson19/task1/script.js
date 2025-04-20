let shop = [
    {
        name: "grape",
        category: "fruit"
    },
    {
        name: "sausage in dough",
        category: "bakery"
    },
    {
        name: "melon",
        category: "fruit"
    },
    {
        name: "yogurt",
        category: "dairy"
    }
];

let fruitCount = 0;

shop.forEach((product) => {
    if (product.category === "fruit") {
        fruitCount++;
    }
    console.log(`Name product: ${product.name}, department: ${product.category}`);
});

console.log(`Total fruit product: ${fruitCount}`);