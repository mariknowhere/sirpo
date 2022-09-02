import React, {FC} from 'react';
import HamburgerMenu from "../../../../components/hamburgerMenu/HamburgerMenu";
import styles from "./StorageMenu.module.scss";
import classNames from "classnames";

const StorageMenu: FC = () => {
  return (
    <HamburgerMenu>
      <div className={styles['menu-content']}>
        <h2 className={styles['menu-content-title']}>Добавить склад</h2>
        <div className={styles['menu-content-input-wrapper']}>
          <span className={styles['menu-content-input-text']}>Название склада</span>
          <input type="text" placeholder="Название склада" className={styles['menu-content-input']} />
        </div>
        <div className={classNames(styles['menu-content-input-wrapper'], styles['menu-content-input-wrapper-last'])}>
          <span className={styles['menu-content-input-text']}>Продажа со склада:</span>
          <input
            type="text"
            placeholder="Продажа со склада:"
            className={classNames(styles['menu-content-input'], styles['menu-content-input-last'])}
          />
          <img src="images/list_arrow.svg" alt="arrow" className={styles['menu-content-input-arrow']} />
        </div>
        <div className={styles['menu-content-buttons']}>
          <button className={styles['menu-content-button-save']}>
            Сохранить
          </button>
          <button className={styles['menu-content-button-cancel']}>
            Отменить
          </button>
        </div>
      </div>
    </HamburgerMenu>
  );
};

export default StorageMenu;
