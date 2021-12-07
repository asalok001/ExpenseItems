import React, { useState } from "react";
import ExpenseItem from "./ExpenseItems";
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";


function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2019');

    const expenseFilterChange = (filtredExpenseData) => {
        setSelectedYear(filtredExpenseData);
        console.log("Filtered from ", filtredExpenseData);

    }

    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    select={selectedYear}
                    onExpenseFilter={expenseFilterChange} />

                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}>

                </ExpenseItem>
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                >
                </ExpenseItem>
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                >
                </ExpenseItem>
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}

                >
                </ExpenseItem> */}

                {/** *******  Rendering data dynamically ****** */}
                {props.items.map((expense) => {
                    <ExpenseItem

                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}

                    />
                    console.log("Expense Data", expense);
                })
                };
            </Card>
        </div>
    );
}

export default Expenses;