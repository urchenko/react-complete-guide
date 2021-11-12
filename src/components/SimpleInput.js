import { useState } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enterdNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enterdNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enterdNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef = event.current.value; // NOT IDEAL DON`T MANIPULATE THE DOM
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
