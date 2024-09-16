import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDownLeft } from "react-icons/go";
import Donut from "./Donut";

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
        <div className="flex gap-10 mb-8">
          <div className="p-4 rounded-xl shadow flex bg-tertiary">
            <span>
              <MdArrowOutward className="icons bg-primary rounded-lg mt-2 text-3xl" />
            </span>
            <div className="mx-2">
              <p className="text-left text-gray-300 text-xs">Total Income</p>
              <h3 className="text-left text-lg font-bold">$632.00</h3>
            </div>
          </div>

          <div className="p-4 rounded-xl shadow flex bg-tertiary">
            <span>
              <GoArrowDownLeft className="icons bg-primary rounded-lg mt-2 text-3xl" />
            </span>
            <div className="mx-4 ">
              <p className="text-left text-gray-300 text-xs">Total Expense</p>
              <h3 className="text-left text-lg font-bold">$632.00</h3>
            </div>
          </div>
        </div>

        {/* chart */}

        <div className="bg-tertiary w-1/2 pl-8">
          <Donut />
        </div>
      </div>
    </div>
  );
};

export default LeftSideUser;
