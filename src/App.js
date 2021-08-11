import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import db from "./firebase";

function App() {
  //const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [expenses, setExpenses] = useState([{}]);
  const onAddExpenseDataHandler = (expense) => {
    let id = db.collection("expenses").doc().id;
    db.collection("expenses").doc(id).set({
      amount: expense.amount,
      date: expense.date,
      title: expense.title,
      id: id,
    });
  };

  // for fatching from firebase
  useEffect(() => {
    db.collection("expenses")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        setExpenses(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div>
      <NewExpense onAddExpenseData={onAddExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
