// we are using multiple useState approach here . BUT we should use the better approach of using useState which is commented in the methods below. and we could use that approach where we depends on the previous state 

import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enterdTitle, setEnteredTitle] = useState('');
    const [enterAmount, setEnteredAmount] = useState('');
    const [enterdDate, setEnteredDate] = useState('');

    //******** OR using single useState ******** */

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // ***** using single useState ********* //

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });

        // ***** Better approach which gets latest update state ****** //
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value }
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // ***** using single useState ********* //
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // ***** Better approach which gets latest update state ****** //

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value }
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // ***** using single useState ********* //

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });

        // ***** Better approach which gets latest update state ****** //
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value }
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterdTitle,
            amount: enterAmount,
            date: new Date(enterdDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label >Title</label>
                    <input
                        type='text'
                        value={enterdTitle}
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label >Amount</label>
                    <input
                        type='number' min='0.01' step='0.01'
                        value={enterAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__controls'>
                    <label >Date</label>
                    <input
                        type='date' min='2019-01-01' max='2022-12-31'
                        value={enterdDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;