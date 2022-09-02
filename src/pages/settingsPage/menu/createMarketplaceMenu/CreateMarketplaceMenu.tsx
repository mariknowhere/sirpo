import React, {FC} from 'react';
import HamburgerMenu from "../../../../components/hamburgerMenu/HamburgerMenu";
import styles from "./CreateMarketplaceMenu.module.scss";
import classNames from "classnames";

const CreateMarketplaceMenu: FC = () => {
  return (
  <HamburgerMenu>
    <div className={styles['menu-content']} >
      <h2 className={styles['menu-content-title']}>Добавить маркетплейс</h2>
      <div className={styles['menu-content-input-wrapper']}>
        <span className={styles['menu-content-input-text']}>Маркетплейс</span>
        <input
          type="text"
          placeholder="Маркетплейс"
          className={classNames(styles['menu-content-input'], styles['menu-content-input-last'])}
        />
        <img src="images/list_arrow.svg" alt="arrow" className={styles['menu-content-input-arrow']} />
      </div>
      <div className={styles['menu-content-input-wrapper']}>
        <span className={styles['menu-content-input-text']}>Название маркетплейса</span>
        <input type="text" placeholder="Название маркетплейса" className={styles['menu-content-input']} />
      </div>
      <div className={styles['menu-content-input-wrapper']}>
        <span className={styles['menu-content-input-text']}>Ключ API</span>
        <input type="text" placeholder="Ключ API" className={styles['menu-content-input']} />
      </div>
      <div className={styles['menu-content-input-wrapper']}>
        <span className={styles['menu-content-input-text']}>Client ID</span>
        <input type="text" placeholder="Client ID" className={styles['menu-content-input']} />
      </div>
      <div className={styles['menu-content-input-wrapper']}>
        <span className={styles['menu-content-input-text']}>ID склада</span>
        <input type="text" placeholder="ID склада" className={styles['menu-content-input']} />
      </div>
      <div className={classNames(styles['menu-content-input-wrapper'], styles['menu-content-input-wrapper-last'])}>
        <span className={styles['menu-content-input-text']}>Продажа со складов:</span>
        <input
          type="text"
          placeholder="-"
          className={classNames(styles['menu-content-input'], styles['menu-content-input-last'])}
        />
        <img src="images/list_arrow.svg" alt="arrow" className={styles['menu-content-input-arrow']} />
        <div className={styles['menu-content-card']}>
          <div className={styles['menu-content-card-item']}>
            <input id="sell_checkbox_one" type="checkbox" className={styles['menu-content-card-item-checkbox']} />
            <label htmlFor="sell_checkbox_one" className={styles['menu-content-card-item-label']}>
              Checkbox
            </label>
          </div>
          <div className={styles['menu-content-card-item']}>
            <input id="sell_checkbox_two" type="checkbox" className={styles['menu-content-card-item-checkbox']} />
            <label htmlFor="sell_checkbox_two" className={styles['menu-content-card-item-label']}>
              Checkbox
            </label>
          </div>
          <div className={styles['menu-content-card-item']}>
            <input id="sell_checkbox_three" type="checkbox" className={styles['menu-content-card-item-checkbox']} />
            <label htmlFor="sell_checkbox_three" className={styles['menu-content-card-item-label']}>
              Checkbox
            </label>
          </div>
          <div className={styles['menu-content-card-item']}>
            <input id="sell_checkbox_four" type="checkbox" className={styles['menu-content-card-item-checkbox']} />
            <label htmlFor="sell_checkbox_four" className={styles['menu-content-card-item-label']}>
              Checkbox
            </label>
          </div>
        </div>
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

export default CreateMarketplaceMenu;
