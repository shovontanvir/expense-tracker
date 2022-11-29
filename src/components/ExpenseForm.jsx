import React, { useRef } from "react";

const ExpenseForm = (props) => {
  const expenseNameInputRef = useRef();
  const expenseAmountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // Listening to inputs
    const enteredExpenseName = expenseNameInputRef.current.value;
    const enteredExpenseAmount = expenseAmountInputRef.current.value;
    const enteredExpenseDate = new Date();

    const expenseObject = {
      date: enteredExpenseDate.toISOString().split('T')[0],
      name: enteredExpenseName,
      amount: +enteredExpenseAmount,
    };

    // setting input values, two way binding(listening and updating)
    expenseNameInputRef.current.value = null;
    expenseAmountInputRef.current.value = null;
    props.onAddExpense(expenseObject);
    // console.log(expenseObject);
  };

  return (
    <form className="flex flex-col md:flex-row justify-between items-center w-3/4 p-5 bg-orange-200 rounded-lg" 
    onSubmit={submitHandler}>
      <div className="my-2 md:my-0 md:mx-4 w-full">
        <input
          type="text"
          placeholder="Expense Title"
          className="px-5 py-2 rounded-lg border border-orange-500 w-full"
          ref={expenseNameInputRef}
        />
      </div>
      <div className="my-2 md:my-0 md:mx-4 w-full">
        <input
          type="number"
          placeholder="Expense Amount"
          className="px-5 py-2 rounded-lg border border-orange-500 w-full"
          ref={expenseAmountInputRef}
        />
      </div>
      <div className="my-2 md:my-0 md:mx-4">
        <button
          className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
