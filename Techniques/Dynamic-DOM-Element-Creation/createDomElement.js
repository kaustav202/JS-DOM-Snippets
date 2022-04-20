function addTransactionDOM(transaction) {
  
//   const type = document.getElementById('in_ex');
//   const sel = type.value;
//   const sign = (sel === "exp" ? "-" : "+");

  const sign = transaction.amount > 0 ? "+" : "-";
  const item = document.createElement("li");
  item.classList.add(sign === "+" ? "plus" : "minus");
  item.innerHTML = `
          ${transaction.text} <span>${sign} ${Math.abs(transaction.amount)}</span
          ><button class="delete-btn" onclick="removeTransaction(${
            transaction.id
          })"><img src="https://i.postimg.cc/t4x1Xhxw/icons8-xbox-x-35.png"/> </button>
    `;
  list.appendChild(item);
}
