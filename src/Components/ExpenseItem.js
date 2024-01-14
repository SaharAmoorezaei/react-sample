import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import React,{useState} from "react"


// function clickHandler()
// {
//   console.log('Clicked;!')
// }


function ExpenseItem(props) {
  // let title = props.title;
  const[title, setTitle] = useState(props.title)
  const clickHandler = () => {
    // console.log('Clicked!');
    // title = 'updated!!!';
    
    setTitle('updated!!!');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      {/*<button onClick={()=>{console.log('Clicked!')}}>Change the Title</button>*/}
      <button onClick={clickHandler}>Change the Title</button>
    </Card>
  );
}

export default ExpenseItem;