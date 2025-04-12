import React, { useState } from "react";


function ExpenseForm({ onAddExpense }) {

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");


  function handleFormSubmit(e) {
    e.preventDefault(); 

    if (description === "" || category === "" || amount === "") {
      alert("Please fill in all fields");
      return;
    }

   
    const newExpense = {
      id: Date.now(), 
      description: description,
      category: category,
      amount: amount,
    };


    onAddExpense(newExpense);

    
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ marginRight: "10px", padding: "8px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
