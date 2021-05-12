import React from 'react';
import './ExpenseForm.css';
const ExpenseForm =() =>{

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' />
                </div> 
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" />
                </div> 
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' min="2020-01-01" max={new Date()} />
                </div> 
            </div>
            <div className='new-expense__actions'>
                <button>Add </button>
            </div>
        </form>
    );
}
export default ExpenseForm;