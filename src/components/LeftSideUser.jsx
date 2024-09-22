import React from "react";
import Donut from "./Donut";
import AddTransaction from "./AddTransaction";
import ExpenseIncomeBtn from "./ExpenseIncomeBtn";

const LeftSideUser = () => {
  return (
    <div className="container flex text-secondary ml-24">
      <div className="basis-1/2">
        {/* expense log */}
        <div className="w-1/2">
          <h2 className="text-2xl mb-4">Expense Log</h2>
          <p className="text-sm text-gray-500 mb-12">
            Capture and organize every penny spent with ease! A clear view of
            your financial habits at your fingertips.
          </p>
        </div>
        {/* income and expense buttons */}
    <ExpenseIncomeBtn />    

        {/* chart */}

        <div className="bg-tertiary w-1/2 pl-8">
          <Donut />
        </div>
      </div>

      <div>
        <AddTransaction />
      </div>
    </div>
  );
};

export default LeftSideUser;
