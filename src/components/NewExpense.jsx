import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  return (
    <div className="flex justify-center my-8">
      <ExpenseForm onAddExpense={props.onSubmit} />
    </div>
  );
};

export default NewExpense;
