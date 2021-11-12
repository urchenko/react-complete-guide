import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enterdNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enterdEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enterdNameIsValid && enterdEmailIsValid) {
    formIsValid = true;
  }

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (!enterdNameIsValid || !enterdEmailIsValid) {
      return;
    }

    // nameInputRef = event.current.value; // NOT IDEAL DON`T MANIPULATE THE DOM

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input value={enteredName} type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler} />
      </div>
      {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input value={enteredEmail} type="email" id="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} />
      </div>
      {emailInputHasError && <p className="error-text">Email must contain @</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
