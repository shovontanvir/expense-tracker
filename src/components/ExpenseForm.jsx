import React, { useRef } from "react";

const ExpenseForm = (props) => {
  const expenseNameInputRef = useRef();
  const expenseAmountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredExpenseName = expenseNameInputRef.current.value;
    const enteredExpenseAmount = expenseAmountInputRef.current.value;

    const expenseObject = {
      expenseName: enteredExpenseName,
      expenseAmount: enteredExpenseAmount,
    };
    expenseNameInputRef.current.value = null;
    expenseAmountInputRef.current.value = null;
    props.onAddExpense(expenseObject);
  };

  return (
    <form className="flex justify-between items-center w-1/2 p-5 bg-orange-200 rounded-lg">
      <div className="">
        <input
          type="text"
          placeholder="Expense Title"
          className="px-5 py-2 rounded-lg border border-orange-500"
          ref={expenseNameInputRef}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Expense Amount"
          className="px-5 py-2 rounded-lg border border-orange-500"
          ref={expenseAmountInputRef}
        />
      </div>
      <div>
        <button
          className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg"
          type="submit"
          onSubmit={submitHandler}
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
