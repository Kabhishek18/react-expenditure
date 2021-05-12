import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
	const [expenseTitle, setTitle] = useState(props.title);
	//Click Handler
	const clickHandler = () => {
		setTitle('Updated!!')
	}
	let expenseDate = props.date;
	let expenseAmount = props.amount;
	return (
		<Card className="expense-item">
			<ExpenseDate date={expenseDate} />
			<div className="expense-item__description"><h2>{expenseTitle}</h2></div>
			<div className="expense-item__price"> $ {expenseAmount}</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
}

export default ExpenseItem;