import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDateHandler = (enteredExpenseDate) => {
    const expenseDate = {
      id: Math.random().toString(),
      ...enteredExpenseDate,
    };
    props.onAddExpense(expenseDate);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add new expese</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
