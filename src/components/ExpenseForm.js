import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const expClickHandler = () => {
    setExpFormState(
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label className="new-expense__control label">Title</label>
            <input
              value={enteredTitle}
              onChange={titleChangeHandler}
              className="new-expense__control input"
              type="text"
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Amount</label>
            <input
              value={enteredAmount}
              onChange={amountChangeHandler}
              className="new-expense__control input"
              type="number"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label className="new-expense__control label">Date</label>
            <input
              value={enteredDate}
              onChange={dateChangeHandler}
              className="new-expense__control input"
              type="date"
              min="2019-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelClickHandler}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  };

  const [ExpFormState, setExpFormState] = useState(
    <div>
      <button onClick={expClickHandler}>Add new expense!</button>
    </div>
  );


  const cancelClickHandler = () => {
    setExpFormState(
      <div>
        <button onClick={expClickHandler}>Add new expense!</button>
      </div>
    );
  };

  return ExpFormState;
};
export default ExpenseForm;
