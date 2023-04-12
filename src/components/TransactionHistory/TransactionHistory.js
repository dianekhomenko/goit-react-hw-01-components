import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({items }) => {
    return (
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th className={css.header}>Type</th>
            <th className={css.header}>Amount</th>
            <th className={css.header}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className={css.row}>{item.type}</td>
              <td className={css.row}>{item.amount}</td>
              <td className={css.row}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};