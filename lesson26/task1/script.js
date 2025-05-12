function sendTransaction() {
    const from = document.getElementById('from-account').value;
    const to = document.getElementById('to-account').value;
    const amount = document.getElementById('amount').value;

    if (validateTransaction(from, to, amount)) {
        const data = {
            from: from,
            to: to,
            amount: parseFloat(amount)
        };

        fetch('http://backend.link/transaction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            document.getElementById('response').textContent = 'Перевод выполнен!';
            document.getElementById('from-account').value = '';
            document.getElementById('to-account').value = '';
            document.getElementById('amount').value = '';
        }).catch(error => {
            document.getElementById('response').textContent = 'Ошибка при отправке запроса.';
            console.error(error);
        });
    } else {
        document.getElementById('response').textContent = 'Проверьте корректность введённых данных.';
    }
}

document.querySelector('button').addEventListener('click', sendTransaction);