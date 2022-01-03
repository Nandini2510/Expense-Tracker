import Expenses from "./components/Expense/Expenses";
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
      <h2>Let's get started!</h2>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
