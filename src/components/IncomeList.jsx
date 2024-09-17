
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteIncome } from "../redux/incomeSlice";

function IncomeList() {
  const income = useSelector((state) => state.income);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Income</h3>
      <ul>
        {income.map((inc) => (
          <li key={inc.id}>
            {inc.category} - ${inc.amount} ({inc.comment})
            <button onClick={() => dispatch(deleteIncome(inc.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;
