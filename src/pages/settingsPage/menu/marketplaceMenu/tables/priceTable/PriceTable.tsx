import React, {FC} from 'react';
import styles from './PriceTable.module.scss';

const PriceTable: FC = () => {
  return (
    <table className={styles['table']}>
      <thead className={styles['table-head']}>
      <th className={styles['table-head-item']}>
        <span className={styles['table-head-item-title']}>Цена от</span>
      </th>
      <th className={styles['table-head-item']}>
        <span className={styles['table-head-item-title']}>Цена до</span>
      </th>
      <th className={styles['table-head-item']}>
        <span className={styles['table-head-item-title-last']}>Наценка</span>
      </th>
      </thead>
      <tbody className={styles['table-body']}>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      <tr className={styles['table-body-row']}>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="от 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-data']}>
          <input type="text" placeholder="до 233" className={styles['table-body-data-input']} />
        </td>
        <td className={styles['table-body-text']}>
          56%
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;