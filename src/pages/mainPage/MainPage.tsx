import React, {FC} from 'react';
import styles from './MainPage.module.scss';
import classNames from "classnames";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

const MainPage: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.main}>
        <div className={classNames(styles['main-popup'], styles['main-popup-orders'])}>
          <span className={styles['main-popup-text']}>Все заказы</span>
          <span className={styles['main-popup-text']}>Все поставки</span>
          <span className={styles['main-popup-text']}>Лист закупа</span>
        </div>
        <div className={classNames(styles['main-popup'], styles['main-popup-products'])}>
          <span className={styles['main-popup-text']}>Список товаров</span>
          <span className={styles['main-popup-text']}>Товары по поставщикам</span>
          <span className={styles['main-popup-text']}>Импорт товаров</span>
        </div>
        <div className={classNames(styles['main-popup'], styles['main-popup-statistics'])}>
          <span className={styles['main-popup-text']}>График</span>
          <span className={styles['main-popup-text']}>Анализ категорий</span>
        </div>
        <div className={styles['main-tables']}>
          <div className={styles['main-left-panel']}>
            <div className={styles['main-left-panel-header']}>
              <h3 className={styles['main-left-panel-title']}>Заказано товаров</h3>
              <div className={styles['main-left-panel-links']}>
                <a href="#" className={styles['main-left-panel-link']}>На сумму</a>
                <a href="#" className={styles['main-left-panel-link']}>Штук</a>
              </div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>330 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>300 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>270 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>240 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>210 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>190 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>160 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>130 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>100 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>90 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>60 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>30 000</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-row']}>
              <span className={styles['main-left-panel-count']}>0</span>
              <div className={styles['main-left-panel-divider']}></div>
            </div>
            <div className={styles['main-left-panel-bottom']}>
              <span className={styles['main-left-panel-date']}>1 авг</span>
              <span className={styles['main-left-panel-date']}>4 авг</span>
              <span className={styles['main-left-panel-date']}>8 авг</span>
              <span className={styles['main-left-panel-date']}>12 авг</span>
              <span className={styles['main-left-panel-date']}>16 авг</span>
              <span className={styles['main-left-panel-date']}>20 авг</span>
              <span className={styles['main-left-panel-date']}>24 авг</span>
              <span className={styles['main-left-panel-date']}>28 авг</span>
              <span className={styles['main-left-panel-date']}>31 авг</span>
            </div>
          </div>
          <div className={styles['main-right-panel']}>
            <h4 className={styles['main-right-panel-title']}>
              Заказы за сегодня
              <span className={styles['main-right-panel-title-blue']}>
                396 товаров на сумму 35 403 руб
              </span>
            </h4>
            <div className={styles['main-right-panel-table']}>
              <div className={styles['main-right-panel-category']}>
                <div className={styles['main-right-panel-category-value']}>
                  <h3 className={styles['main-right-panel-category-text']}>Дата</h3>
                </div>
                <div className={styles['main-right-panel-category-value']}>
                  <h3 className={styles['main-right-panel-category-text']}>Маркетплейс</h3>
                </div>
                <div className={styles['main-right-panel-category-value']}>
                  <h3 className={styles['main-right-panel-category-text']}>Товар</h3>
                  <img src="images/sort.svg" alt="sort" className={styles['main-right-panel-category-image']}/>
                </div>
                <div className={styles['main-right-panel-category-value']}>
                  <h3 className={styles['main-right-panel-category-text']}>Цена продажи</h3>
                </div>
              </div>
              <div className={styles['main-right-panel-rows']}>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
                <div className={styles['main-right-panel-row']}>
                  <span className={styles['main-right-panel-column']}>12.04.2022</span>
                  <span className={styles['main-right-panel-column']}>wildberries</span>
                  <span className={styles['main-right-panel-column']}>Товар</span>
                  <span className={styles['main-right-panel-column']}>373 руб.</span>
                </div>
              </div>
            </div>
            <div className={styles['main-right-panel-bottom']}>
              <div className={styles['main-right-panel-share']}>
                <a href="#" className={styles['main-right-panel-share-text']}>Перейти</a>
                <img src="images/export.svg" alt="export" className={styles['main-right-panel-share-image']} />
              </div>
              <div className={styles['main-right-panel-additional']}>
                <span className={styles['main-right-panel-total']}>Total 85 items</span>
                <img src="images/arrow_left.svg" alt="left_arrow" className={styles['main-right-panel-arrow']} />
                <span className={styles['main-right-panel-number']}>1</span>
                <img src="images/pagination_dats.svg" alt="dats" className={styles['main-right-panel-dats']} />
                <span className={styles['main-right-panel-number']}>4</span>
                <span className={styles['main-right-panel-number']}>5</span>
                <span className={styles['main-right-panel-number-blue']}>6</span>
                <span className={styles['main-right-panel-number']}>7</span>
                <span className={styles['main-right-panel-number']}>8</span>
                <img src="images/pagination_dats.svg" alt="dats" className={styles['main-right-panel-dats']} />
                <span className={styles['main-right-panel-number']}>50</span>
                <img src="images/arrow_right.svg" alt="right_arrow" className={styles['main-right-panel-arrow']} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['main-list']}>
          <div className={styles['main-item']}>
            <h3 className={styles['main-item-title']}>Доставлено за период</h3>
            <div className={styles['main-item-content']}>
              <div className={styles['main-item-info']}>
                <img src="images/ozon.png" alt="ozon" className={styles['main-item-info-image']} />
                <div className={styles['main-item-info-text']}>
                  <span className={styles['main-item-info-date']}>C 01.02 - 15.02</span>
                  <h4 className={styles['main-item-info-price']}>1 823 323 руб.</h4>
                </div>
              </div>
              <div className={styles['main-item-divider']}></div>
              <div className={styles['main-item-info']}>
                <img src="images/wild.png" alt="ozon" className={styles['main-item-info-image']} />
                <div className={styles['main-item-info-text']}>
                  <span className={styles['main-item-info-date']}>C 16.02 - 22.02 </span>
                  <h4 className={styles['main-item-info-price']}>1 823 323 руб.</h4>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['main-item']}>
            <h3 className={styles['main-item-title']}>Капитализация склада</h3>
            <div className={styles['main-item-row']}>
              <span className={styles['main-item-row-title']}>Сумма всех товаров на складе в закупе:</span>
              <h4 className={styles['main-item-row-price']}>1 323 323.00 руб.</h4>
            </div>
            <div className={styles['main-item-row']}>
              <span className={styles['main-item-row-title']}>Сумма всех товаров в продаже:</span>
              <h4 className={styles['main-item-row-price']}>723 323.00 руб.</h4>
            </div>
          </div>
          <div className={styles['main-item']}>
            <div className={styles['main-item-start']}>
              <h3 className={styles['main-item-document-title']}>Документация</h3>
              <div className={styles['main-right-panel-share']}>
                <a href="#" className={styles['main-right-panel-share-text']}>Перейти</a>
                <img src="images/export.svg" alt="export" className={styles['main-right-panel-share-image']} />
              </div>
            </div>
            <img src="images/document_background.png" alt="document" className={styles['main-item-background']}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
