let shoppingList = [
    "Молоко",
    "Хлеб",
    "Яблоки"
  ];
  
  function renderShoppingList() {
    const list = document.getElementById("shopping-list");
    list.innerHTML = "";

    shoppingList.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item;

      const button = document.createElement("button");
      button.textContent = "Удалить";
      button.onclick = () => {
        shoppingList.splice(index, 1);
        renderShoppingList();
      };

      li.appendChild(button);
      list.appendChild(li);
    });
  }
  
  renderShoppingList();