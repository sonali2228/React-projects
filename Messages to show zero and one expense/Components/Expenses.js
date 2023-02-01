import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('None')
  const filterChangeHandeler = (selectedYear) =>{
    console.log(selectedYear)
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(expense=>
    { 



      return expense.date.getFullYear().toString()===filteredYear;
    })

  return (
    <Card className="expenses">

  const filteredExpenses = filteredYear==='None'? props.items : props.items.filter(expense=>
     { return expense.date.getFullYear().toString()===filteredYear})
    let expensesContent = <h3>No Expenses Found</h3>
    if(filteredExpenses.length===1)
    {
      expensesContent = filteredExpenses.map(item =>{

        return (
          <div>
          <ExpenseItem
          key = {item.id}
          title={item.title}
          amount={item.amount}
          date={item.date} />
          <h4>Add More Expenses</h4>
          </div>

        )

      })

      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandeler}></ExpenseFilter>
      {filteredExpenses.map(item =>{
    }
    else if(filteredExpenses.length>0)
    {
      expensesContent =  filteredExpenses.map(item =>{

        return (
          <ExpenseItem
          key = {item.id}
          title={item.title}
          amount={item.amount}
          date={item.date} />
        )

      })}
      })
    }

  return (
    <Card className="expenses">


      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandeler}></ExpenseFilter>
      {expensesContent}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      /> */}
      {/* <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}
export default Expenses;