import React, {FC} from 'react';
import styles from "./TimeTable.module.scss";

const TimeTable: FC = () => {
  return (
    <table className={styles['table']}>
      <thead className={styles['table-head']}>
      <th className={styles['table-head-item']}>
        <span className={styles['table-head-item-title']}>Часы</span>
      </th>
      <th className={styles['table-head-item']}>
        <span className={styles['table-head-item-title']}>Назначить</span>
      </th>
      </thead>
      <tbody className={styles['table-body']}>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          00:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          01:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          02:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          03:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          04:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          05:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          06:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          07:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          08:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          09:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          10:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          11:00
        </td>
        <td className={styles['table-body-data-checkbox']}>
          <input type="checkbox" />
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default TimeTable;
