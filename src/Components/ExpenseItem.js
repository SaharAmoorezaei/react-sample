import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";


// function clickHandler()
// {
//   console.log('Clicked;!')
// }

const clickHandler = () => {
  console.log('Clicked!');
};

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      {/*<button onClick={()=>{console.log('Clicked!')}}>Change the Title</button>*/}
      <button onClick={clickHandler}>Change the Title</button>
    </Card>
  );
}

export default ExpenseItem;