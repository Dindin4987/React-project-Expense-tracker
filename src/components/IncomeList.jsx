import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome, editIncome } from "../redux/incomeSlice";

function IncomeList() {
  const income = useSelector((state) => state.income);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Income</h3>
      <ul>
        {income.map((inc) => (
          <li key={inc.id}>
            {inc.category} {inc.comment} {inc.date} {inc.time} ${inc.amount}{" "}
            <button
              onClick={() => dispatch(editIncome(inc.id))}
              className="border bg-primary rounded-lg px-5 py-1"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteIncome(inc.id))}
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

export default IncomeList;
