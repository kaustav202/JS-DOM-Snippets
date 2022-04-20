    const type = document.getElementById('in_ex');
    const sel = type.value;
    const amt = (sel === "inc" ? +amount.value : -amount.value);
    
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: amt
    };
