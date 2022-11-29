import React from "react";
import ShowDate from "./ShowDate";

const ExpenseItem = (props) => {
  return (
    <div className="bg-slate-600 py-5 px-10 rounded-2xl flex my-12 items-center justify-between">
      <ShowDate date={props.expenseDate} />
      <h1 className="text-6xl text-yellow-100 font-mono">
        {props.expenseName}
      </h1>
      <h1 className="text-5xl text-yellow-400 font-mono">
        {props.expenseAmount}
        <span className="text-yellow-700">BDT</span>
      </h1>
    </div>
  );
};

export default ExpenseItem;
