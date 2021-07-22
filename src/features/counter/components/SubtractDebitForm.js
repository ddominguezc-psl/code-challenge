import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { subtractDebit } from '../counterSlice';

import styles from '../Counter.module.css';

function SubtractDebitForm() {
  const dispatch = useDispatch();
  const [checkNumber, setCheckNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmitDebit = (e) => {
    e.preventDefault();
    dispatch(
        subtractDebit({
        date: Date.now(),
        checkNumber: checkNumber,
        amount: Number(amount),
      })
    );
    setCheckNumber('');
    setAmount('');
  };

  return (
    <div className={styles.formSubtract}>
      <h5>Subract Debit</h5>
      <form onSubmit={handleSubmitDebit}>
        <label for="check-number">Check Number:</label>
        <input
          id="check-number"
          type="text"
          name="check-number"
          value={checkNumber}
          onChange={(e) => setCheckNumber(e.target.value)}
        />{' '}
        <br />
        <label for="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SubtractDebitForm;
