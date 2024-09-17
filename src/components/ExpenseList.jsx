import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense } from "../redux/expensesSlice";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category} - ${expense.amount} ({expense.comment})
            <button onClick={() => dispatch(deleteExpense(expense.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
