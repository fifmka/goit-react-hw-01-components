import s from 'components/TransactionHistory/TransactionHistory.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.tr}>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <tr>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default TransactionHistory;

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
