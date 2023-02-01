import react from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = () => {
const NewExpense = (props) => {
    const saveExpenseDateHandler = (enetredExpenseData)=>
    {
        const expenseData = {
        ...enetredExpenseData,
        id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm></ExpenseForm>
            <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}></ExpenseForm>

        </div>

    )
}
}
export default NewExpense;