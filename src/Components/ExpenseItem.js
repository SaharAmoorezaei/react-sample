import './ExpenseItem.css'

{/*const expenseDate = new Date(2024,1,6);
const expenseTitle =  "Household Expense";
const expenseAmount = 25000;*/}

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div className='expense-item__date'>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;

