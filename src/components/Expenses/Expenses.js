import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

function Expanses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultSelectedOption={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseChart filteredExpenses={filteredExpenses} />
      <ExpensesList filtereditems={filteredExpenses} />
    </Card>
  );
}

export default Expanses;
