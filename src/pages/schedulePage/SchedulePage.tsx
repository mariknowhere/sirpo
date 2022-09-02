import React, {FC} from 'react';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./SchedulePage.module.scss";
import classNames from "classnames";
import MarketplaceMenu from "../settingsPage/menu/marketplaceMenu/MarketplaceMenu";

const SchedulePage: FC = () => {
  return (
    <div>
      <Header />
      <MarketplaceMenu />
      <Navbar />
      <div className={styles['schedule-content']}>
        <div className={styles['schedule-header']}>
          <h4 className={styles['schedule-header-title']}>Задать показатели</h4>
          <div className={styles['schedule-header-info']}>
            <div className={styles['schedule-header-input-wrapper']}>
              <input
                type="text"
                placeholder="Поставщик"
                className={classNames(styles['schedule-header-input'], styles['schedule-header-input-list'])}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['schedule-header-input-arrow']} />
              <div className={styles['schedule-popup']}>
                <span className={styles['schedule-popup-text']}>Поставщик 1</span>
                <span className={styles['schedule-popup-text']}>Поставщик 2</span>
                <span className={styles['schedule-popup-text']}>Поставщик 3</span>
              </div>
            </div>
            <div className={styles['schedule-header-input-wrapper']}>
              <input
                type="text"
                className={classNames(styles['schedule-header-input'], styles['schedule-header-input-date'])}
              />
              <div className={styles['schedule-header-input-placeholder']}>
                <span className={styles['schedule-header-input-text']}>Заказы с </span>
                <img src="images/swap_right.svg" alt="swap" className={styles['schedule-header-input-swap']} />
                <span className={styles['schedule-header-input-text']}>Заказы по</span>
                <img src="images/calendar.svg" alt="arrow" className={styles['schedule-header-input-calendar']} />
              </div>
            </div>
            <div className={styles['schedule-header-buttons']}>
              <button className={styles['schedule-header-button']}>
                Сегодня
              </button>
              <button className={styles['schedule-header-button']}>
                Вчера
              </button>
              <button className={styles['schedule-header-button']}>
                Неделя
              </button>
              <button className={styles['schedule-header-button']}>
                Месяц
              </button>
              <button className={styles['schedule-header-button']}>
                Квартал
              </button>
              <button className={styles['schedule-header-button']}>
                Год
              </button>
              <button className={classNames(styles['schedule-header-button'], styles['schedule-header-button-blue'])}>
                Показать
              </button>
              <button className={classNames(styles['schedule-header-button'], styles['schedule-header-button-black'])}>
                Заказы
              </button>
              <button className={classNames(styles['schedule-header-button'], styles['schedule-header-button-black'])}>
                Показать реализацию
              </button>
            </div>
          </div>
        </div>
        <div className={styles['schedule-body']}>
          <div className={styles['schedule-body-item']}>
            <h3 className={styles['schedule-body-item-title']}>Данные:</h3>
            <div className={styles['schedule-body-item-info']}>
              <div className={styles['schedule-body-item-info-item']}>
                <span
                  className={classNames(
                    styles['schedule-body-item-info-topic'], styles['schedule-body-item-info-topic-first']
                  )}
                >
                  Оборот:
                </span>
                <h4
                  className={classNames(
                  styles['schedule-body-item-info-price'], styles['schedule-body-item-info-price-first']
                )}
                >1 823 323 руб.</h4>
              </div>
              <div className={styles['schedule-body-item-info-item']}>
                <span className={styles['schedule-body-item-info-topic']}>Комиссии:</span>
                <h4 className={styles['schedule-body-item-info-price']}>1 823 323 руб.</h4>
              </div>
              <div className={styles['schedule-body-item-info-item']}>
                <span className={styles['schedule-body-item-info-topic']}>Выручка:</span>
                <h4 className={styles['schedule-body-item-info-price']}>1 823 323 руб.</h4>
              </div>
              <div className={styles['schedule-body-item-info-item']}>
                <span className={styles['schedule-body-item-info-topic']}>Себестоимость выплаченная:</span>
                <h4 className={styles['schedule-body-item-info-price']}>1 823 323 руб.</h4>
              </div>
              <div className={styles['schedule-body-item-info-item']}>
                <span className={styles['schedule-body-item-info-topic']}>Чистая прибыль:</span>
                <h4 className={styles['schedule-body-item-info-price']}>1 823 323 руб.</h4>
              </div>
              <div className={styles['schedule-body-item-info-item']}>
                <span className={styles['schedule-body-item-info-topic']}>Средний чек:</span>
                <h4 className={styles['schedule-body-item-info-price']}>1 823 323 руб.</h4>
              </div>
            </div>
          </div>
          <div className={styles['schedule-panel']}>
            <div className={styles['schedule-panel-header']}>
              <h3 className={styles['schedule-panel-title']}>Заказано товаров</h3>
              <div className={styles['schedule-panel-links']}>
                <a href="#" className={styles['schedule-panel-link']}>На сумму</a>
                <a href="#" className={styles['schedule-panel-link']}>Штук</a>
              </div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>330 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>300 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>270 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>240 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>210 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>190 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>160 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>130 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>100 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>90 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>60 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>30 000</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-row']}>
              <span className={styles['schedule-panel-count']}>0</span>
              <div className={styles['schedule-panel-divider']}></div>
            </div>
            <div className={styles['schedule-panel-pagination']}>
              <span className={styles['schedule-panel-date']}>1 авг</span>
              <span className={styles['schedule-panel-date']}>4 авг</span>
              <span className={styles['schedule-panel-date']}>8 авг</span>
              <span className={styles['schedule-panel-date']}>12 авг</span>
              <span className={styles['schedule-panel-date']}>16 авг</span>
              <span className={styles['schedule-panel-date']}>20 авг</span>
              <span className={styles['schedule-panel-date']}>24 авг</span>
              <span className={styles['schedule-panel-date']}>28 авг</span>
              <span className={styles['schedule-panel-date']}>31 авг</span>
            </div>
            <div className={styles['schedule-bottom']}>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/blue_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Оборот</span>
              </div>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/red_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Комиссии</span>
              </div>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/green_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Выручка</span>
              </div>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/gray_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Себестоимость</span>
              </div>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/orange_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Прибыль</span>
              </div>
              <div className={styles['schedule-bottom-item']}>
                <img src="images/purple_dot.svg" alt="dot" className={styles['schedule-bottom-item-image']} />
                <span className={styles['schedule-bottom-item-text']}>Штук</span>
              </div>
            </div>
          </div>
          <div className={styles['schedule-statistic']}>
            <div className={styles['schedule-statistic-card-wrapper']}>
              <div className={styles['schedule-statistic-card']}>
                <h4 className={styles['schedule-statistic-card-title']}>Статистика:</h4>
                <div className={styles['schedule-statistic-card-info']}>
                  <div className={styles['schedule-statistic-card-item']}>
                    <img src="images/ozon_small.png" alt="ozon" className={styles['schedule-statistic-card-image']} />
                    <span className={styles['schedule-statistic-card-text']}>Продажи: <strong>45</strong></span>
                  </div>
                  <div className={styles['schedule-statistic-card-text']}>
                    Сумма: <strong>3 453 руб.</strong>
                  </div>
                </div>
              </div>
              <div className={styles['schedule-statistic-info']}>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>Новых:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>На отгрузку:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>В доставке:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>Доставленных:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic-red']}>Отмененных:</span>
                  <h4 className={styles['schedule-statistic-info-item-number-red']}>23</h4>
                </div>
              </div>
            </div>
            <div className={styles['schedule-statistic-card-wrapper']}>
              <div className={styles['schedule-statistic-card']}>
                <h4 className={styles['schedule-statistic-card-title']}>Статистика:</h4>
                <div className={styles['schedule-statistic-card-info']}>
                  <div className={styles['schedule-statistic-card-item']}>
                    <img src="images/wild_small.png" alt="ozon" className={styles['schedule-statistic-card-image']} />
                    <span className={styles['schedule-statistic-card-text']}>Продажи: <strong>45</strong></span>
                  </div>
                  <div className={styles['schedule-statistic-card-text']}>
                    Сумма: <strong>3 453 руб.</strong>
                  </div>
                </div>
              </div>
              <div className={styles['schedule-statistic-info']}>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>Новых:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>На отгрузку:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>В доставке:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic']}>Доставленных:</span>
                  <h4 className={styles['schedule-statistic-info-item-number']}>23</h4>
                </div>
                <div className={styles['schedule-statistic-info-item']}>
                  <span className={styles['schedule-statistic-info-item-topic-red']}>Отмененных:</span>
                  <h4 className={styles['schedule-statistic-info-item-number-red']}>23</h4>
                </div>
              </div>
            </div>
            <div className={styles['schedule-statistic-divider']}></div>
            <div className={styles['schedule-statistic-bottom']}>
              <h3 className={styles['schedule-statistic-bottom-title']}>Капитализация склада</h3>
              <div className={styles['schedule-statistic-bottom-item']}>
                <span className={styles['schedule-statistic-bottom-text']}>Сумма всех товаров на складе в закупе:</span>
                <h4 className={styles['schedule-statistic-bottom-price']}>1 323 323.00 руб.</h4>
              </div>
              <div className={styles['schedule-statistic-bottom-item']}>
                <span className={styles['schedule-statistic-bottom-text']}>Сумма всех товаров в продаже:</span>
                <h4 className={styles['schedule-statistic-bottom-price']}>723 323.00 руб.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
