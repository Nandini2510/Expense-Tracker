import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expense = [
    {
      id: 1,
      title: "Car insurance",
      date: new Date(2021, 2, 12),
      amount: 200,
    },
    {
      id: 2,
      title: "mobile insurance",
      date: new Date(2021, 2, 12),
      amount: 300,
    },
    {
      id: 3,
      title: "bike insurance",
      date: new Date(2021, 2, 12),
      amount: 400,
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
