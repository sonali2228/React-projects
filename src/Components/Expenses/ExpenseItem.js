import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const delButtonHandler = ()=> {
    console.log('Delete Expense in Progress')

  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button className="delButton" onClick={delButtonHandler}>Del Expense</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
