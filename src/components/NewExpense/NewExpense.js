import React, { useState } from "react";
import "./NewExpense.css";
import ExpesneForm from "./ExpenseForm";

function NewExpense(props) {
  const [isFilling, setIsFilling] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expesneData = {
      ...enteredExpenseData,
    };
    props.onAddExpenseData(expesneData);
    setIsFilling(false);
  };

  const stopFillingFormHandler = () => {
    setIsFilling(false);
  };

  const startFillingFormHandler = () => {
    setIsFilling(true);
  };

  return (
    <div className="new-expense">
      {!isFilling && (
        <button type="submit" onClick={startFillingFormHandler}>
          Add Expense
        </button>
      )}
      {isFilling && (
        <ExpesneForm
          onSaveExpanseData={saveExpenseDataHandler}
          onCancel={stopFillingFormHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
