import React, {FC} from 'react';
import styles from './ProviderMenu.module.scss';
import HamburgerMenu from "../../../../components/hamburgerMenu/HamburgerMenu";

const ProviderMenu: FC = () => {
  return (
    <HamburgerMenu>
      <div className={styles['menu-content']}>
        <h2 className={styles['menu-content-title']}>Добавить поставщика</h2>
        <div className={styles['menu-content-input-wrapper']}>
          <span className={styles['menu-content-input-text']}>Название поставщика</span>
          <input type="text" placeholder="Название поставщика" className={styles['menu-content-input']} />
        </div>
        <div className={styles['menu-content-input-wrapper']}>
          <span className={styles['menu-content-input-text']}>Ссылка на сайт</span>
          <input type="text" placeholder="Ссылка на сайт" className={styles['menu-content-input']} />
        </div>
        <div className={styles['menu-content-comment-wrapper']}>
          <span className={styles['menu-content-input-text']}>Комментарий</span>
          <textarea name="" placeholder="Комментарий" className={styles['menu-content-comment']}></textarea>
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

export default ProviderMenu;
