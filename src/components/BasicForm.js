import useInput from '../hooks/use-input';
import useInputReducer from '../hooks/use-input-reducer';

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enterdNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: enterdLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enterdEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputReducer((value) => value.includes('@'));

  let formIsValid = false;

  if (enterdNameIsValid && enterdLastNameIsValid && enterdEmailIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(enteredName, enteredLastName, enteredEmail);

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
          {nameInputHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className="error-text">Last Name must not be empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className="error-text">Email must contain @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
