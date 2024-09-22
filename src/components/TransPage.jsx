import React from "react";
import { useSelector } from "react-redux";
import ExpenseList from "./ExpenseList";
import IncomeList from "./IncomeList";
import AddTransaction from "./AddTransaction";

const TransPage = () => {
  const expenses = useSelector((state) => state.expenses);
  const income = useSelector((state) => state.income);

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const totalIncome = income.reduce((acc, inc) => acc + inc.amount, 0);
  return (
    <>

      <div className="summary">
        <h2>Total Income: ${totalIncome}</h2>
        <h2>Total Expenses: ${totalExpenses}</h2>
      </div>
      <AddTransaction />
      {/* <ExpenseList />
      <IncomeList /> */}
    </>
  );
};

export default TransPage;
