import React, {FC} from 'react';
import styles from './RegisterPage.module.scss';

const RegisterPage: FC = () => {
  return (
    <div className={styles.register}>
     <div className={styles['register-header']}>
       <img src="images/blue_logo.svg" alt="logo" className={styles['register-header-logo']} />
       <div className={styles['register-header-links']}>
         <a href="#" className={styles['register-header-link']}>
           Products
         </a>
         <a href="#" className={styles['register-header-link']}>
           Downloads
         </a>
         <a href="#" className={styles['register-header-link']}>
           Enterprise
         </a>
         <a href="#" className={styles['register-header-link']}>
           Resources
           <img src="images/black_down_arrow.svg" alt="down_arrow" className={styles['register-header-image']}/>
         </a>
       </div>
       <div className={styles['register-header-buttons']}>
           <button className={styles['register-header-button']}>
             <span className={styles['register-header-button-text']}>Регистрация</span>
           </button>
           <button className={styles['register-header-button']}>
             <span className={styles['register-header-button-text']}>Войти</span>
           </button>
       </div>
     </div>
      <div className={styles['register-content']}>
        <div className={styles['register-content-block']}>
          <h1 className={styles['register-content-title']}>Комплексная система автоматизации работы с маркетплейсами</h1>
          <span className={styles['register-content-description']}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
          </span>
          <div className={styles['register-content-button-wrapper']}>
            <button className={styles['register-content-button']}>
              Зарегистрироваться
            </button>
          </div>
          <div className={styles['register-content-bottom']}>
            <img src="images/card_circle.svg" alt="card" className={styles['register-content-card']} />
            <span className={styles['register-content-text']}>1 месяц бесплатно</span>
            <div className={styles['register-content-divider']}></div>
            <img src="images/card_circle.svg" alt="card" className={styles['register-content-card']} />
            <span className={styles['register-content-text']}>1 месяц бесплатно</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
