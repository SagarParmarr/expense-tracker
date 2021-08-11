import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.filtereditems.length === 0) {
    //  i.e.: 1 < 2 && console.log("1 is always less then 2");
    //  here (&&) is work like (single if) turnury operator
    //  it does not have else(i.e. ':') part. it's JS feature.
    return <h1 className="expenses-list__fallback">No Expenses Found.</h1>;
  }

  return (
    <ul className="expenses-list">
      {props.filtereditems.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}

export default ExpensesList;
