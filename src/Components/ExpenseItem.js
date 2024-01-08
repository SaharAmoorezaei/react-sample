import './ExpenseItem.css'

const expenseDate = new Date(2024,1,6);
const expenseTitle =  "Household Expense";
const expenseAmount = 25000;

function ExpenseItem()
{
    return (
                <div className='expense-item'>
                    <div className='expense-item__date'>{expenseDate.toDateString()}</div>
                    <div className='expense-item__description'>
                        <h2>{expenseTitle}</h2>
                        <div className='expense-item__price'>{expenseAmount}</div>
                    </div>
                </div>
           );
}
export default ExpenseItem;

