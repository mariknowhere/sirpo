import React, {FC} from 'react';
import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <div className={styles['navbar']}>
      <a href="#" className={styles['navbar-item']}>Главная</a>
      <a href="#" className={styles['navbar-item']}>Заказы</a>
      <a href="#" className={styles['navbar-item']}>Товары</a>
      <a href="#" className={styles['navbar-item']}>Статистика</a>
    </div>
  );
};

export default Navbar;
