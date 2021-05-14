import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const SaveExpenseDataHandler =(enteredExpenseData) =>{
    const expensData ={
      ...enteredExpenseData,
    id: Math.random().toString()
    }
    props.onAddExpense(expensData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData ={SaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;