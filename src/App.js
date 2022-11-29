import ExpenseItem from "./components/ExpenseItem";
import Layout from "./components/Layout";
import NewExpense from "./components/NewExpense";
import expenses from "./Dummy/DummyExpenses";


const App = () => {
  let expenseList = [...expenses];
  const addExpenseItem = (expenseObject) => {
    expenseList.push(expenseObject);
    console.log(expenseList);
  }
  return (
      <Layout>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-mono text-red-800 font-semibold">Expense Tracker</h1>
        <NewExpense onSubmit={addExpenseItem} />
        {
          expenseList.map((expense, index) => (
            <ExpenseItem key={index} expenseDate={expense.date} expenseName={expense.name} expenseAmount={expense.amount} />
          ))
        }
      </Layout>
  );
}

export default App;
