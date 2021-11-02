import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      id: Math.random().toString(),
      ...enteredExpenseDate,
    };
    props.onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
