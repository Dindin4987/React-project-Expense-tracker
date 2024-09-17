// src/components/AddTransaction.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expensesSlice";
import { addIncome } from "../redux/incomeSlice";

function AddTransaction() {
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "expense") {
      dispatch(
        addExpense({
          id: Date.now(),
          category,
          amount: Number(amount),
          comment,
          date,
        })
      );
    } else {
      dispatch(
        addIncome({
          id: Date.now(),
          category,
          amount: Number(amount),
          comment,
          date,
        })
      );
    }
    setCategory("");
    setAmount("");
    setComment("");
    setDate("");
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit} className="bg-gray-100 m-4 flex-col w-8">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Comment"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTransaction;
