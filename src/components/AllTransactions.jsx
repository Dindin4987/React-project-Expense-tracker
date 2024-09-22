import React from "react";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";

const AllTransactions = () => {
  return (
    <div>
      <ExpenseList />
      <IncomeList />
    </div>
  );
};

export default AllTransactions;
