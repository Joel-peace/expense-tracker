import React, { useState } from 'react';

function ExpenseForm(props) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newExpense = {
      description: description,
      amount: amount,
      category: category,
    };
    props.onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setCategory('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Expense Description"
      />
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Amount"
      />
      <input
        type="text"
        value={category}
        onChange={handleCategoryChange}
        placeholder="Category"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
