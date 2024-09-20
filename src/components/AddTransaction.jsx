import React, { useState } from "react";

const addTransaction = () => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        type,
        date,
        time,
        category,
        amount,
        comment,
      },
    ]);
    setCategory("");
    setAmount("");
    setComment("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <table className="table-fixed flex flex-col px-3 p-3">
        <thead>
          <th>Category</th>
          <th>Comment</th>
          <th>Date</th>
          <th>Time</th>
          <th>Sum</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.category}</td>
              <td>{t.comment}</td>
              <td>{t.date}</td>
              <td>{t.time}</td>
              <td>{t.amount}</td>
              <td>{t.category}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit} style={formStyles} className="text-black">
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="expense"
              // checked={formData.type === "Expense"}
              onChange={(e) => setType(e.target.value)}
            />
            Expense
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="income"
              // checked={formData.type === "Income"}
              onChange={(e) => setType(e.target.value)}
            />
            Income
          </label>
        </div>

        <div>
          <label>Date</label>
          <input
            className="text-black"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>Time</label>
          <input
            className="text-black"
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div>
          <label>Category</label>
          <input
            className="text-black"
            type="text"
            name="category"
            placeholder="Different"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div>
          <label>Sum</label>
          <input
            className="text-black"
            type="number"
            name="amount"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label>Comment</label>
          <input
            className="text-black"
            type="text"
            name="comment"
            placeholder="Enter the text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button type="submit" style={buttonStyles}>
          Add
        </button>
      </form>
    </div>
  );
};

// Inline styles for form
const formStyles = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#1e1e1e",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  color: "#fff",
  gap: "10px",
};

const buttonStyles = {
  backgroundColor: "#00ff00",
  color: "#000",
  border: "none",
  width: "50px",
  padding: "5px",
  cursor: "pointer",
  borderRadius: "5px",
};

export default addTransaction;
