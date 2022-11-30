import React from "react";
import AddExpenseButton from "./AddExpenseButton";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="flex flex-col justify-center my-8 mx-auto sm:w-3/4 p-5 bg-orange-200 rounded-lg">
      {props.flag ? (
        <ExpenseForm onAddExpense={props.onSubmit} onclick={props.onCancel} />
      ) : (
        <AddExpenseButton onclick={props.onClick} />
      )}
    </div>
  );
};

export default NewExpense;
