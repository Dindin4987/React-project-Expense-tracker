
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expensesSlice";
import { v4 as uuidv4 } from "uuid";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      const newExpense = {
        id: uuidv4(),
        name,
        amount: parseFloat(amount),
      };
      dispatch(addExpense(newExpense));
      setName("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
