import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
	const expenseDate =  props.date;
	const expenseTitle = props.title;
	const expenseAmount =props.amount;

	return (
	<Card className="expense-item">
		<ExpenseDate date={expenseDate}/>
		<div className="expense-item__description"><h2>{expenseTitle}</h2></div>
		<div className="expense-item__price"> $ {expenseAmount}</div>
	</Card>
	);
}

export default ExpenseItem;