import React from 'react';
import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [amount, setAmount] = useState(props.amount)

  const delButtonHandler = ()=> {
    console.log('Delete Expense in Progress')
    setAmount('100')

  }
  return (
    <Card className='expense-item'>
    <Card className='expense-item'> 
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button className="delButton" onClick={delButtonHandler}>Del Expense</button>
        <div className='expense-item__price'>${amount}</div>
        <button className="delButton" onClick={delButtonHandler}>Change Amount</button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
