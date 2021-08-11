import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpesneForm(props) {
  // Initial Approach:
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    //  - this is default JavaScript behaviour(i.e. function)
    //   we can prevent default request being send to HttpServer
    //   using "event.preventDefault() function." and our page is
    //   also not raload.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: enteredDate,
    };

    props.onSaveExpanseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title: </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label> Amount: </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label> Date: </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  // Second Approach to create State: Apply for amount and date as well.
  // const [userInput, setUserInput] = {
  //     enteredTitle: useState(""),
  //     enteredAmount: useState(""),
  //     enteredDate: useState(""),
  // };

  // Second Approach:
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: event.target.value,
  // });

  // // Second Approach 2.O:
  // setUserInput((prevState) => {
  //   return { ...userInput, enteredTitle: event.target.value };
  // });
}
export default ExpesneForm;
