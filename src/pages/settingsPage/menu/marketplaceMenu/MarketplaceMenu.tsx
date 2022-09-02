import React, {FC} from 'react';
import HamburgerMenu from "../../../../components/hamburgerMenu/HamburgerMenu";
import styles from './MarketplaceMenu.module.scss';
import classNames from "classnames";
import TimeTable from "./tables/timeTable/TimeTable";
import PriceTable from "./tables/priceTable/PriceTable";

const MarketplaceMenu: FC = () => {
  return (
    <HamburgerMenu right={524}>
      <div className={styles['menu-content']}>
        <h3>Маркетплейс</h3>
        <div className={styles['menu-links']}>
          <a href="#" className={styles['menu-link']}>Настройка ценообразования</a>
          <a href="#" className={styles['menu-link']}>Настройка времени продажи</a>
        </div>
        <div className={styles['menu-inputs']}>
          <div className={styles['menu-input-wrapper']}>
            <input
              type="text"
              placeholder="Поставщик"
              className={classNames(styles['menu-input'], styles['menu-input-last'])}
            />
            <img src="images/list_arrow.svg" alt="arrow" className={styles['menu-input-arrow']} />
          </div>
          <div className={styles['menu-input-wrapper']}>
            <input
              type="text"
              placeholder="День недели"
              className={classNames(styles['menu-input'], styles['menu-input-last'])}
            />
            <img src="images/list_arrow.svg" alt="arrow" className={styles['menu-input-arrow']} />
          </div>
        </div>
        <PriceTable />
        <div className={styles['menu-pagination']}>
          <img src="images/arrow_left.svg" alt="left_arrow" />
          <span className={styles['menu-pagination-number-blue']}>1</span>
          <span className={styles['menu-pagination-number']}>2</span>
          <span className={styles['menu-pagination-number']}>3</span>
          <span className={styles['menu-pagination-number']}>4</span>
          <span className={styles['menu-pagination-number']}>5</span>
          <img src="images/arrow_right.svg" alt="right_arrow" />
        </div>
        <div className={styles['menu-buttons']}>
          <button className={styles['menu-button-save']}>
            Сохранить
          </button>
          <button className={styles['menu-button-cancel']}>
            Отменить
          </button>
        </div>
      </div>
    </HamburgerMenu>
  );
};

export default MarketplaceMenu;
