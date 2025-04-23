let expenses = [];

function addExpense() {
  const nameInput = document.getElementById("expense-name");
  const amountInput = document.getElementById("expense-amount");
  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Пожалуйста, введите корректные данные!");
    return;
  }

  expenses.push({ name, amount });
  nameInput.value = "";
  amountInput.value = "";
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById("expense-list");
  const totalSpan = document.getElementById("total-amount");
  list.innerHTML = "";

  expenses.forEach(expense => {
    const li = document.createElement("li");
    li.textContent = `${expense.name}: ${expense.amount} грн.`;
    list.appendChild(li);
  });

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalSpan.textContent = total;
}