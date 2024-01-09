import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

const expences = [
  { title: "Household Expense", amount: 25000, date: new Date(2023, 4, 27) },
  { title: "Travel Expense", amount: 1300, date: new Date(2023, 4, 27) },
  { title: "Education fees", amount: 5000, date: new Date(2023, 4, 27) }
];

function App() {
  return (
    <div>
      <h2>Hello Coders!</h2>
      <ExpenseItem title={expences[0].title} amount={expences[0].amount} date={expences[0].date} />
      <ExpenseItem title={expences[1].title} amount={expences[1].amount} date={expences[1].date} />
      <ExpenseItem title={expences[2].title} amount={expences[2].amount} date={expences[2].date} />
    </div>
  );
}

export default App;
