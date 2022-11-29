import ExpenseItem from "./components/ExpenseItem";
import Layout from "./components/Layout";
import expenses from "./Dummy/DummyExpenses";


function App() {
  return (
      <Layout>
        <h1 className="text-6xl text-center font-mono text-red-800 font-semibold">Expense Tracker</h1>
        {
          expenses.map((expense) => (
          <ExpenseItem expenseDate={expense.date} expenseName={expense.name} expenseAmount={expense.amount} />
          ))
        }
      </Layout>
  );
}

export default App;
