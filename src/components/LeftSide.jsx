import React from "react";
import Rectangle from "../components/images/Rectangle.png";
import { MdArrowOutward } from "react-icons/md";

const LeftSide = () => {
  return (
    <div className="bg-black flex container">
      <aside className="flexflex-1">
        <div className="mb-12">
          <div className="relative w-p h-p ml-28">
            <img
              src={Rectangle}
              alt="couple"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="absolute">
            <div className="bg-secondary p-4 rounded shadow flex">
              <span>
                <MdArrowOutward className="icons bg-primary rounded-lg mt-2 text-3xl" />
              </span>
              <div className="mx-4 ">
                <p className="text-left text-gray-500 text-xs">Your balance</p>
                <h3 className="text-left text-lg font-bold">$632.00</h3>
              </div>
              <div>
                <p className="bg-slate-200 rounded px-3 text-primary text-xs mt-6">
                  +1.29%
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LeftSide;
