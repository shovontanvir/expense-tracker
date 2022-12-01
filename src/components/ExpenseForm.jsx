import React, { useRef, useState } from "react";

const ExpenseForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [placeClass, setPlaceClass] = useState("placeholder:text-gray-400");
  const [showAlert, setShowAlert] = useState("hidden");
  const expenseNameInputRef = useRef();
  const expenseAmountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    // Listening to inputs
    const enteredExpenseName = expenseNameInputRef.current.value;
    const enteredExpenseAmount = expenseAmountInputRef.current.value;
    const enteredExpenseDate = new Date();

    const expenseObject = {
      date: enteredExpenseDate.toISOString().split("T")[0],
      name: enteredExpenseName,
      amount: +enteredExpenseAmount,
    };

    // setting input values, two way binding(listening and updating)
    expenseNameInputRef.current.value = null;
    expenseAmountInputRef.current.value = null;

    // if n=input fields are empty do nothing
    if(enteredExpenseName.trim().length === 0 || enteredExpenseAmount.trim().length === 0) {
      setIsValid(false);
      setPlaceClass("placeholder:text-red-500 placeholder:font-bold");
      setShowAlert("block");
      // placeClass = {!isValid ? "placeholder:text-red-900" : }
      console.log(isValid);
      return;
    }

    // pass the expense object to parent component
    props.onAddExpense(expenseObject);
  };

  return (
    <>
    <h1 className={` px-5 mb-3 text-red-500 font-bold font-mono ${showAlert}`}>**Please give a valid input inside the fields.</h1>
    <div className="flex flex-col lg:flex-row justify-center items-center w-full">
      <form
        className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-3/4"
        onSubmit={submitHandler}
      >
        <div className="my-2 lg:my-0 lg:mx-4 w-full">
          <input
            type="text"
            placeholder="Expense Title"
            className={`px-5 py-2 rounded-lg border border-orange-500 w-full placeholder:font-mono ${placeClass}`}
            ref={expenseNameInputRef}
          />
        </div>
        <div className="my-2 lg:my-0 lg:mx-4 w-full">
          <input
            type="number"
            placeholder="Expense Amount"
            className={`px-5 py-2 rounded-lg border border-orange-500 w-full placeholder:font-mono ${placeClass}`}
            ref={expenseAmountInputRef}
          />
        </div>
        <div className="my-2 lg:my-0 lg:mx-4 w-full">
          <button
            className="border border-orange-500 text-orange-500 px-5 py-2 rounded-lg font-mono w-full"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <div className="my-2 lg:my-0 lg:mx-4 w-full lg:w-1/4">
        <button
          className="border border-red-500 text-red-500 px-5 py-2 rounded-lg font-mono w-full"
          onClick={props.onclick}
        >
          Cancel
        </button>
      </div>
    </div>
    </>
  );
};

export default ExpenseForm;
