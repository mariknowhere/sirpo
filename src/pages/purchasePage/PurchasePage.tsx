import React, {FC} from 'react';
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styles from "./PurchasePage.module.scss";
import classNames from "classnames";

const PurchasePage: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles['purchase-content']}>
        <div className={styles['purchase-header']}>
          <div className={styles['purchase-header-button-wrapper']}>
            <button className={styles['purchase-header-button']}>
              <img src="images/change_blue.svg" alt="edit"/>
              <span className={styles['purchase-header-button-text']}>
                Изменить статус
              </span>
            </button>
          </div>
          <div className={styles['purchase-header-button-wrapper']}>
            <button className={styles['purchase-header-button']}>
              <img src="images/trash_blue.svg" alt="edit"/>
              <span className={styles['purchase-header-button-text']}>
                Очистить лист
              </span>
            </button>
          </div>
          <div className={styles['purchase-header-button-wrapper']}>
            <button className={styles['purchase-header-button']}>
              <img src="images/download_blue.svg" alt="edit"/>
              <span className={styles['purchase-header-button-text']}>
                Скачать Excel
              </span>
            </button>
          </div>
          <div className={styles['purchase-header-button-wrapper']}>
            <button className={classNames(styles['purchase-header-button'], styles['purchase-header-button-blue'])}>
              <img src="images/download_white.svg" alt="edit"/>
              <span
                className={classNames(styles['purchase-header-button-text'], styles['purchase-header-button-blue-text'])}
              >
                Скачать Excel
              </span>
            </button>
          </div>
        </div>
      <table className={styles['purchase-table']}>
        <thead className={styles['purchase-table-head']}>
        <th className={styles['purchase-table-head-item']}>
          <span className={styles['purchase-table-head-item-title']}>Товар</span>
          <img src="images/sort.svg" alt="sort" className={styles['purchase-table-head-item-image']} />
        </th>
        <th className={styles['purchase-table-head-item']}>
          <span className={styles['purchase-table-head-item-title']}>Дата создания</span>
          <img src="images/sort.svg" alt="sort" className={styles['purchase-table-head-item-image']} />
        </th>
        <th className={styles['purchase-table-head-item']}>
          <span className={styles['purchase-table-head-item-title']}>Маркетплейс</span>
        </th>
        <th className={styles['purchase-table-head-item']}>
          <span className={styles['purchase-table-head-item-title']}>ID заказа</span>
          <img src="images/sort.svg" alt="sort" className={styles['purchase-table-head-item-image']} />
        </th>
        <th className={classNames(styles['purchase-table-head-item'], styles['purchase-table-head-item-last'])}>
          <span className={styles['purchase-table-head-item-title']}>Поставщик</span>
          <img src="images/sort.svg" alt="sort" className={styles['purchase-table-head-item-image']} />
        </th>
        <th className={styles['purchase-table-head-item']}>
          <span
            className={classNames(styles['purchase-table-head-item-title'], styles['purchase-table-head-item-title-last'])}
          >
            Количество
          </span>
        </th>
        </thead>
        <tbody className={styles['purchase-table-body']}>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/wild_table.svg" alt="wild" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        <tr className={styles['purchase-table-body-row']}>
          <td className={styles['purchase-table-body-data']}>
            Товар
          </td>
          <td className={styles['purchase-table-body-data']}>
            <span>12.04.2022 13:30</span>
          </td>
          <td className={styles['purchase-table-body-data-image']}>
            <img src="images/ozon_table.svg" alt="ozon" className={styles['purchase-table-body-image']} />
          </td>
          <td className={styles['purchase-table-body-data']}>
            4566774
          </td>
          <td className={styles['purchase-table-body-data']}>
            Поставщик
          </td>
          <td className={styles['purchase-table-body-text']}>
            22
          </td>
        </tr>
        </tbody>
      </table>
        <div className={styles['purchase-bottom']}>
          <div className={styles['purchase-bottom-additional']}>
            <span className={styles['purchase-bottom-total']}>Total 85 items</span>
            <img src="images/arrow_left.svg" alt="left_arrow" className={styles['purchase-bottom-arrow']} />
            <span className={styles['purchase-bottom-number']}>1</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['purchase-bottom-dats']} />
            <span className={styles['purchase-bottom-number']}>4</span>
            <span className={styles['purchase-bottom-number']}>5</span>
            <span className={styles['purchase-bottom-number-blue']}>6</span>
            <span className={styles['purchase-bottom-number']}>7</span>
            <span className={styles['purchase-bottom-number']}>8</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['purchase-bottom-dats']} />
            <span className={styles['purchase-bottom-number']}>50</span>
            <img src="images/arrow_right.svg" alt="right_arrow" className={styles['purchase-bottom-arrow']} />
          </div>
          <div className={styles['purchase-bottom-page']}>
            10 / page v
          </div>
          <div className={styles['purchase-bottom-text']}>
            Go to
          </div>
          <div className={styles['purchase-bottom-input-wrapper']}>
            <input type="text" className={styles['purchase-bottom-input']} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasePage;
