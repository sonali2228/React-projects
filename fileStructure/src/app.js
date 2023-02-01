import ExpenseItem  from "./Components/ExpenseItems";
function App() {
import React from 'react';

import Expenses from './Components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {title: 'Food', amount: 200,date : new Date(2022,7 ,14).toString().slice(0,15),location: 'Panjurli Hubli'},
    {title: 'Bill', amount: 500,date : new Date(2022,7 ,15).toString().slice(0,15),location: 'Hescom Hubli'},
    {title: 'Movie', amount: 250,date : new Date(2022,8 ,14).toString().slice(0,15),location: 'Cinepolis Hubli'},
    {title: 'College', amount: 75000,date : new Date(2022,8 ,14).toString().slice(0,15),location: 'Kle Tech'}
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(item=>
        {
          return (
            <ExpenseItem title={item.title} amount = {item.amount}
            date ={item.date} location={item.location}></ExpenseItem>
          )
        })}



      <Expenses items={expenses} />
    </div>
  );
}

export default App;
export default App; 