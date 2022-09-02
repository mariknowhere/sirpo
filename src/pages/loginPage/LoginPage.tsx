import React, {FC} from 'react';
import styles from './LoginPage.module.scss';

const LoginPage: FC = () => {
  return (
    <div className={styles.login}>
      <div className={styles['login-left-panel']}>
        <img src="images/logo.svg" alt="logo" className={styles['login-left-panel-logo']} />
        <h2 className={styles['login-left-panel-title']}>Комплексная система автоматизации работы с маркетплейсами</h2>
        <div className={styles['login-left-panel-photo-wrapper']}>
          <img src="images/login_image.svg" alt="sirpo" className={styles['login-left-panel-photo']} />
        </div>
      </div>
      <div className={styles['login-right-panel']}>
        <div className={styles['login-right-panel-block']}>
          <h2 className={styles['login-right-panel-title']}>Войти в SIPRO</h2>
          <div className={styles['login-right-panel-inputs']}>
            <div className={styles['login-right-panel-input-wrapper']}>
              <span className={styles['login-right-panel-label']}>
                Телефон
                <span className={styles['login-right-panel-label-require']}>
                  *
                </span>
              </span>
              <input type="number" placeholder="+7" className={styles['login-right-panel-input']} />
            </div>
            <div className={styles['login-right-panel-input-wrapper']}>
              <span className={styles['login-right-panel-label']}>
                E-mail
                <span className={styles['login-right-panel-label-require']}>
                  *
                </span>
              </span>
              <input type="email" placeholder="e-mail" className={styles['login-right-panel-input']} />
            </div>
            <div className={styles['login-right-panel-input-wrapper']}>
              <span className={styles['login-right-panel-label']}>
                Пароль
              </span>
              <input id="password" type="password" className={styles['login-right-panel-input']} />
              <label htmlFor="password" className={styles['login-right-panel-eye']}>
                <img src="images/eye_invisible.svg" alt="eye"/>
              </label>
            </div>
          </div>
          <div className={styles['login-right-panel-checkbox']}>
            <input type="checkbox" id="checkbox" className={styles['login-right-panel-checkbox-input']} />
            <label htmlFor="checkbox" className={styles['login-right-panel-checkbox-label']}>
              Даю согласие на
              <span className={styles['login-right-panel-checkbox-label-blue']}>
                обработку данных
              </span>
              <span className={styles['login-right-panel-checkbox-label-require']}>
                *
              </span>
            </label>
          </div>
            <button className={styles['login-right-panel-button']}>
              <span className={styles['login-right-panel-button-text']}>Войти</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
