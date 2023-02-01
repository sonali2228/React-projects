function ExpenseItem()
{
    return  <div>
        <h2> ExpenseItems are listed below</h2>
        <pre>
            <h3>Food Rs 10</h3>
            <h3>Petrol Rs 100</h3>
            <h3>Movies Rs 200</h3>
        </pre>
        </div>

import './ExpenseItems.css'
function ExpenseItem(props)
{   

    
    const  LocationOfExpenditure = 'Panjurli Hubli'
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2> 
                <h3>{props.location}</h3>
                <div className="expense-item__price">{props.amount}</div>


            </div>
        </div>
    );

}
}
export default ExpenseItem;
