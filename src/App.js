import { useState } from "react";
import Expense from "./components/Expense";
import Layout from "./components/Layout";
import NewExpense from "./components/NewExpense";
import expenses from "./Dummy/DummyExpenses";


const App = () => {
  const [flag, setFlag] = useState(false);
  const [expenseList, setExpenseList] = useState(expenses);


  const hideForm = () => {
    setFlag(false);
  };

  const showForm = () => {
    setFlag(true);
  };

  const addExpenseItem = (expenseObject) => {
    setExpenseList((prevExpenses) => {
      return [expenseObject, ...prevExpenses];
    });
    setFlag(false)
  }

  return (
      <Layout>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-mono text-red-800 font-semibold">Expense Tracker</h1>
        <NewExpense onSubmit={addExpenseItem} onClick={showForm} onCancel={hideForm} flag={flag} />
        <Expense expenses={expenseList} />
      </Layout>
  );
}

export default App;
