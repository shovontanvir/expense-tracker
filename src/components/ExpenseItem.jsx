import React from "react";
import ShowDate from "./ShowDate";

const ExpenseItem = (props) => {
  return (
    <div className="bg-slate-600 py-3 px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl flex flex-col sm:flex-row my-4 items-center justify-between text-center sm:text-left">
      <ShowDate date={props.expenseDate} />
      <div className="w-full md:w-1/2 lg:w-3/4 flex flex-col lg:flex-row items-center lg:justify-between sm:pl-5 md:pl-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-yellow-100 font-mono">
          {props.expenseName}
        </h1>
        <h1 className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-mono">
          {props.expenseAmount}
          <span className="text-yellow-700">BDT</span>
        </h1>
      </div>
    </div>
  );
};

export default ExpenseItem;
