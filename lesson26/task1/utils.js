function validateTransaction(from, to, amount) {
    return from.trim() !== '' && to.trim() !== '' && parseFloat(amount) > 0;
}