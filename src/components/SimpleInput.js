import { useState, useRef, useEffect } from 'react';
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState('false');
  const [enteredNameTouched, setEnteredNameTouched] = useState('false');
  const nameInputRef = useRef();

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log('Name input is valid!');
    }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef = event.current.value; // NOT IDEAL DON`T MANIPULATE THE DOM
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} value={enteredName} type="text" id="name" onChange={nameInputChangeHandler} />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
