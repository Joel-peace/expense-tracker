// src/components/ExpenseTable.jsx
import React from 'react';

function ExpenseTable(props) {
  function handleDelete(id) {
    props.onDeleteExpense(id);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map(function(expense) {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              
              
              <td>
                <button onClick={function() { handleDelete(expense.id); }}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
