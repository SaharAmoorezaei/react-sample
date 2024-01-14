import Expenses from "./Components/Expenses/Expenses";
import NewExpense  from "./Components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { title: "Household Expense", amount: 25000, date: new Date(2023, 4, 27) },
    { title: "Travel Expense", amount: 1300, date: new Date(2023, 5, 28) },
    { title: "Education fees", amount: 5000, date: new Date(2023, 6, 29) },
  ];
  return (
    <div>
      {/* <h2>Hello Coders!</h2> */}
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  )
}
export default App;