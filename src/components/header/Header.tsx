import React, {FC} from 'react';
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles['header']}>
      <div className={styles['header-start']}>
        <img src="images/logo.svg" alt="logo" className={styles['header-logo']} />
        <div className={styles['header-divider']}></div>
        <span className={styles['header-text']}>24 дня бесплатного периода</span>
      </div>
      <div className={styles['header-end']}>
        <span className={styles['header-text']}>Dan445@me.com</span>
        <div className={styles['header-divider']}></div>
        <img src="images/options.svg" alt="options"/>
      </div>
    </div>
  );
};

export default Header;
