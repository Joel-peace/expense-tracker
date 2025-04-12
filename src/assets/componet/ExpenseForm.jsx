import React from "react";

function ExpenseTable({ expenses }) {
  return (
    <table border="1" cellPadding="8" cellSpacing="0">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount (Ksh)</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="3">No expenses found</td>
          </tr>
        ) : (
          expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
