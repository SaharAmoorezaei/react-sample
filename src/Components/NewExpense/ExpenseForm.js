import React, {useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = ()=>{
     const[enteredTitle,  setEnteredTitle] = useState('');
     const[enteredAmount,  setEnteredAmount] = useState('');
     const[enteredDate,  setEnteredDate] = useState('');
    // const[userInput,  setUserInput] = useState({
    //     enteredTtile:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return  { ...prevState, enteredTtile:event.target.value};
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredAmount:event.target.value};
        // });
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value});
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredDate:event.target.value};
        // });
    }
// const inputChangeHandler = (identifier, value) => {
//     if(identifier =='title')
//         setEnteredTitle(value);
//     else if(identifier == 'amount')
//         setEnteredAmount(value)
//     else
//         setEnteredDate(value);
// }

const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate)
    }

    alert(1);
    console.log(expenseData);
}

    return (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                   {/* <input type="text"onChange={(even)=>{console.log(even.target.value)}} /> */}
                   <input type="text"onChange={titleChangeHandler} />
                   {/* <input type="text" onChange={(event)=>{inputChangeHandler('title', event.target.value)}} /> */}
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                   <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                   {/* <input type="number" min="0.01" step="0.01" onChange={(event)=>{inputChangeHandler('amont', event.target.value)}}/> */}
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2024-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
                    {/* <input type="date" min="2024-01-01" max="2024-12-31" onChange={(event)=>{inputChangeHandler('date', event.target.value)}}/> */}
                </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
            )
}

export default ExpenseForm;