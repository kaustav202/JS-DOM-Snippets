function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
}
