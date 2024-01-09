import './ExpenseItem.css'

/*const expenseDate = new Date(2024,1,6);
const expenseTitle =  "Household Expense";
const expenseAmount = 25000;*/


import ExpenseDate from "./ExpenseDate.js";

function ExpenseItem(props) {

    {
        /*const month = props.date.toLocaleString('en-US', {month: 'long'});
        const year = props.date.getFullYear();
        const day = props.date.toLocaleString('en-US', {day: '2-digit'});*/
    }


    return (
        <div className='expense-item'>
           {
                /*<div className='expense-item__date'>
                    <div>{month}</div>
                    <div>{year}</div>
                    <div>{day}</div>
                    </div>*/
            }
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;

