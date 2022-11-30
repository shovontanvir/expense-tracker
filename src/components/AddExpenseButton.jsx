import React from "react";

const AddExpenseButton = (props) => {
  return (
    <div
      className="w-1/2 justify-center text-center bg-emerald-500 p-2 rounded-xl flex flex-col lg:flex-row mx-auto"
      onClick={props.onclick}
    >
      <button>
        <h1 className="sm:text-lg md:text-xl font-mono font-semibold text-sky-800 mx-2">
          Add New Expense
        </h1>
      </button>
    </div>
  );
};

export default AddExpenseButton;
