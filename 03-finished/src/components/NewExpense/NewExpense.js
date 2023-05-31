import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <React.Fragment>
      <div className="new-expense">
        <ExpenseForm />
      </div>
    </React.Fragment>
  );
};

export default NewExpense;
