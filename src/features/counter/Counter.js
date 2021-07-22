import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectBalance,
  selectCount,
} from './counterSlice';
import Table from './components/Table';
import AddDebitForm from './components/AddDebitForm';
import SubtractDebitForm from './components/SubtractDebitForm';

import styles from './Counter.module.css';

export function Counter() {
  const list = useSelector(selectCount);
  const balance = useSelector(selectBalance);
 
  return (
    <div>
      <h1>Perficient National Bank</h1>
      <div className={styles.container}>
        <AddDebitForm />
        <SubtractDebitForm />
      </div>
      <h3 className={balance > 0 ? styles.greenBalance: styles.redBalance}>Balance: {balance}</h3>
      <Table list={list} />
    </div>
  );
}
