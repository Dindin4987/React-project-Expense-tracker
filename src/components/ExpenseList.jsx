import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExpense, editExpense } from "../redux/expensesSlice";

function ExpenseList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.category} {expense.comment} {expense.date}{" "}
            {expense.time} ${expense.amount}
            <button
              onClick={() => dispatch(editExpense(expense.id))}
              className="border bg-primary rounded-lg px-5 py-1"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteExpense(expense.id))}
              className="border bg-gray-700 rounded-lg px-5 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
