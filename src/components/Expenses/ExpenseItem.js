import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { DeleteForever } from "@material-ui/icons";
import db from "../../firebase";
import { Button } from "@material-ui/core";

function ExpenseItem(props) {
  //function handler

  const deleteExpenseItem = (id) => {
    if (window.confirm("Are you sure to delete this Expense ❓")) {
      //console.log(db.collection("expenses").doc(id));
      db.collection("expenses").doc(id).delete();
    }
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate exdate={new Date(props.expense.date)} />
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__price">₹{props.expense.amount}</div>
          <DeleteForever
            style={{ fontSize: 50 }}
            className="deleteButton"
            onClick={() => deleteExpenseItem(props.expense.id)}
          />
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
