import React, {FC} from 'react';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from './DeliveryPage.module.scss';
import classNames from "classnames";

const DeliveryPage: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles['delivery-content']}>
        <div className={styles['delivery-header']}>
          <div className={styles['delivery-header-button-wrapper']}>
            <button className={styles['delivery-header-button']}>
              Синхронизация с WB
            </button>
          </div>
          <img src="images/info.svg" alt="info" className={styles['delivery-header-image']}/>
          <div className={styles['delivery-header-info']}>
            Для актуализации данных с серверами Wildberries нажмите на кнопку
          </div>
        </div>
        <table className={styles['delivery-table']}>
          <thead className={styles['delivery-table-head']}>
          <th className={styles['delivery-table-head-item']}>
            <span className={styles['delivery-table-head-item-title']}>Номер</span>
            <img src="images/sort.svg" alt="sort" className={styles['delivery-table-head-item-image']} />
          </th>
          <th className={styles['delivery-table-head-item']}>
            <span className={styles['delivery-table-head-item-title']}>Маркетплейс</span>
          </th>
          <th className={styles['delivery-table-head-item']}>
            <span className={styles['delivery-table-head-item-title']}>Дата создания</span>
            <img src="images/sort.svg" alt="sort" className={styles['delivery-table-head-item-image']} />
          </th>
          <th className={styles['delivery-table-head-item']}>
            <span className={styles['delivery-table-head-item-title']}>Дата закрытия</span>
            <img src="images/sort.svg" alt="sort" className={styles['delivery-table-head-item-image']} />
          </th>
          <th className={classNames(styles['delivery-table-head-item'], styles['delivery-table-head-item-last'])}>
            <span className={styles['delivery-table-head-item-title']}>Заказы</span>
            <img src="images/sort.svg" alt="sort" className={styles['delivery-table-head-item-image']} />
          </th>
          </thead>
          <tbody className={styles['delivery-table-body']}>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              353
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              3534
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="wild" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              322
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="wild" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              3456
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={classNames(styles['delivery-table-body-row'], styles['delivery-table-body-row-blue'])}>
            <td className={styles['delivery-table-body-data']}>
              356
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
            <div className={styles['delivery-card']}>
              <div className={styles['delivery-card-item']}>
                <img src="images/edit_blue.svg" alt="edit"/>
                <span className={classNames(styles['delivery-card-item-text'], styles['delivery-card-item-text-blue'])}>
                  Подбор лист
                </span>
              </div>
              <div className={styles['delivery-card-item']}>
                <img src="images/edit_bold.svg" alt="edit"/>
                <span className={styles['delivery-card-item-text']}>Маркировка заказов</span>
              </div>
              <div className={styles['delivery-card-item']}>
                <img src="images/edit.svg" alt="edit"/>
                <span className={styles['delivery-card-item-text']}>Баркод поставки</span>
              </div>
            </div>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              3466
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              3688
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              7688
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              5785
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              678
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              678
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              5785
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="wild" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              678
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/ozon_table.svg" alt="ozon" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          <tr className={styles['delivery-table-body-row']}>
            <td className={styles['delivery-table-body-data']}>
              8888
            </td>
            <td className={styles['delivery-table-body-data-image']}>
              <img src="images/wild_table.svg" alt="wild" className={styles['delivery-table-body-image']} />
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              <span>12.04.2022 13:30</span>
            </td>
            <td className={styles['delivery-table-body-data']}>
              Заказы
            </td>
          </tr>
          </tbody>
        </table>
        <div className={styles['delivery-bottom']}>
          <div className={styles['delivery-bottom-additional']}>
            <span className={styles['delivery-bottom-total']}>Total 85 items</span>
            <img src="images/arrow_left.svg" alt="left_arrow" className={styles['delivery-bottom-arrow']} />
            <span className={styles['delivery-bottom-number']}>1</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['delivery-bottom-dats']} />
            <span className={styles['delivery-bottom-number']}>4</span>
            <span className={styles['delivery-bottom-number']}>5</span>
            <span className={styles['delivery-bottom-number-blue']}>6</span>
            <span className={styles['delivery-bottom-number']}>7</span>
            <span className={styles['delivery-bottom-number']}>8</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['delivery-bottom-dats']} />
            <span className={styles['delivery-bottom-number']}>50</span>
            <img src="images/arrow_right.svg" alt="right_arrow" className={styles['delivery-bottom-arrow']} />
          </div>
          <div className={styles['delivery-bottom-page']}>
            10 / page v
          </div>
          <div className={styles['delivery-bottom-text']}>
            Go to
          </div>
          <div className={styles['delivery-bottom-input-wrapper']}>
            <input type="text" className={styles['delivery-bottom-input']} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryPage;
