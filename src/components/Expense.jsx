import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");

  let expenseContent;

  if (selectedYear !== "all") {
    const filteredExpenses = props.expenses.filter((expense) => {
      return selectedYear === expense.date.split("-")[0];
    });
    if (filteredExpenses.length > 0)
      expenseContent = filteredExpenses.map((expense, index) => (
        <ExpenseItem
          key={index + Math.random()}
          expenseDate={expense.date}
          expenseName={expense.name}
          expenseAmount={expense.amount}
        />
      ));
    else
      expenseContent = (
        <div className="bg-slate-600 py-3 px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl flex flex-col sm:flex-row my-4 items-center justify-between text-center sm:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl text-yellow-100 font-mono">
            No Expenses Found for The Selected Year.
          </p>
        </div>
      );
  } else
    expenseContent = props.expenses.map((expense, index) => (
      <ExpenseItem
        key={index + Math.random()}
        expenseDate={expense.date}
        expenseName={expense.name}
        expenseAmount={expense.amount}
      />
    ));

  const filterHandler = (filterValue) => {
    setSelectedYear(filterValue);
  };
  return (
    <>
      <ExpenseFilter selected={selectedYear} onFilterChange={filterHandler} />
      {expenseContent}
    </>
  );
};

export default Expense;
