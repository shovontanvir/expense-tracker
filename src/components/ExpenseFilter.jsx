import React from "react";

const ExpenseFilter = (props) => {
  const filterChangeHandler = (event) => {
    const value = event.target.value;
    props.onFilterChange(value);
  };

  return (
    <div className="flex flex-col md:flex-row w-full md:justify-end items-end md:items-center">
      <label className="md:mr-3 text-red-700 text-xs sm:text-lg font-mono">
        Select by Year
      </label>
      <select
        className="bg-transparent border border-red-700 px-3 py-2 rounded-lg"
        onChange={filterChangeHandler}
        value={props.selected}
      >
        <option value="all">All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
