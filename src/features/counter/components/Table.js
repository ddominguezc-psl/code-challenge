import React from 'react';
import styles from '../Counter.module.css';

function Table({ list }) {
  return (
    <table className={styles.table}>
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Check #</th>
        <th>Amount</th>
      </tr>
      {list.map((item) => {
        return (
          <tr>
            <td>{new Date(item.date).toLocaleDateString()}</td>
            <td>{item.type}</td>
            <td>{item.checkNumber}</td>
            <td>{item.amount}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
