import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDebit } from '../counterSlice';

import styles from '../Counter.module.css';

function AddDebitForm() {
  const dispatch = useDispatch();
  const [addCheckNumber, setAddCheckNumber] = useState('');
  const [addAmount, setAddAmount] = useState('');

  const handleSubmitDebit = (e) => {
    e.preventDefault();
    dispatch(
      addDebit({
        date: Date.now(),
        checkNumber: addCheckNumber,
        amount: Number(addAmount),
      })
    );
    setAddCheckNumber('');
    setAddAmount('');
  };

  return (
    <div className={styles.formAdd}>
      <h5>Add Debit</h5>
      <form onSubmit={handleSubmitDebit}>
        <label for="check-number">Check Number:</label>
        <input
          id="check-number"
          type="text"
          name="check-number"
          value={addCheckNumber}
          onChange={(e) => setAddCheckNumber(e.target.value)}
        />{' '}
        <br />
        <label for="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={addAmount}
          onChange={(e) => setAddAmount(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddDebitForm;
