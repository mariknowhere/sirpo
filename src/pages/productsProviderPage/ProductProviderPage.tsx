import React, {FC} from 'react';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import classNames from "classnames";
import styles from './ProductProviderPage.module.scss';

const ProductProviderPage: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.provider}>
        <div className={styles['provider-content']}>
          <div className={styles['provider-header']}>
            <input type="text" className={styles['provider-header-search']} placeholder="Искать по номеру заказа"/>
            <button className={styles['provider-header-button']}>
              <span className={styles['provider-header-button-text']}>Поиск</span>
            </button>
            <div className={styles['provider-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Поставщик"
                className={styles['provider-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
            </div>
            <div className={styles['provider-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Маркетплейс"
                className={styles['provider-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
            </div>
            <div className={styles['provider-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Категория"
                className={styles['provider-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
            </div>
            <div className={styles['provider-header-input-wrapper']}>
              <input
                type="text"
                className={classNames(styles['provider-header-input'], styles['provider-header-input-date'])}
              />
              <div className={styles['provider-header-input-placeholder']}>
                <span className={styles['provider-header-input-text']}>14.05.2022 </span>
                <img src="images/swap_right.svg" alt="swap" className={styles['provider-header-input-swap']} />
                <span className={styles['provider-header-input-text']}>14.05.2022</span>
                <img src="images/calendar.svg" alt="arrow" className={styles['provider-header-input-calendar']} />
              </div>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Сегодня
              </button>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Три дня
              </button>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Неделя
              </button>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Месяц
              </button>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Квартал
              </button>
            </div>
            <div className={styles['provider-departures-start-button-wrapper']}>
              <button className={styles['provider-departures-start-button']}>
                Год
              </button>
            </div>
            <button className={styles['provider-hidden-button']}>
              <span className={styles['provider-hidden-button-text']}>Скрыть фильтры</span>
              <img src="images/close.svg" alt="close" className={styles['provider-hidden-button-image']} />
            </button>
          </div>
          <div className={styles['provider-header-inputs']}>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <span className={styles['provider-header-filter-button-text']}>Изменить статус</span>
                <img src="images/blue_arrow.svg" alt="plus" className={styles['provider-header-filter-button-image-arrow']}/>
              </button>
            </div>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <img src="images/edit_blue_small.svg" alt="plus" className={styles['provider-header-filter-button-image']}/>
                <span className={styles['provider-header-filter-button-text']}>Изменить статус</span>
              </button>
            </div>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <img src="images/plus.svg" alt="plus" className={styles['provider-header-filter-button-image']}/>
                <span className={styles['provider-header-filter-button-text']}>Создать</span>
              </button>
            </div>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <span className={styles['provider-header-filter-button-text']}>Начисления</span>
              </button>
            </div>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <span className={styles['provider-header-filter-button-text']}>АВС</span>
              </button>
            </div>
            <div className={styles['provider-header-filter']}>
              <button className={styles['provider-header-filter-button']}>
                <span className={styles['provider-header-filter-button-text']}>EXEL</span>
              </button>
            </div>
            <div className={styles['provider-header-checkbox-wrapper']}>
              <input checked id="storage" type="checkbox" className={styles['provider-header-checkbox']} />
              <label htmlFor="storage" className={styles['provider-header-checkbox-label']}>На складе</label>
            </div>
            <div className={styles['provider-header-checkbox-wrapper']}>
              <input checked id="provider" type="checkbox" className={styles['provider-header-checkbox']} />
              <label htmlFor="provider" className={styles['provider-header-checkbox-label']}>У поставщика</label>
            </div>
            <div className={styles['provider-header-checkbox-wrapper']}>
              <input id="sell" type="checkbox" className={styles['provider-header-checkbox']} />
              <label htmlFor="sell" className={styles['provider-header-checkbox-label']}>Продан</label>
            </div>
            <div className={styles['provider-header-checkbox-wrapper']}>
              <input id="fbw" type="checkbox" className={styles['provider-header-checkbox']} />
              <label htmlFor="fbw" className={styles['provider-header-checkbox-label']}>FBW</label>
            </div>
            <div className={styles['provider-header-checkbox-wrapper']}>
              <input id="red" type="checkbox" className={styles['provider-header-checkbox']} />
              <label htmlFor="red" className={styles['provider-header-checkbox-label']}>RED</label>
            </div>
          </div>
          <div className={styles['provider-terms']}>
            <div className={styles['provider-terms-left']}>
              <h4 className={styles['provider-terms-text']}>And</h4>
              <div className={styles['provider-terms-divider']}></div>
              <img src="images/close_rotate.svg" alt="close"/>
            </div>
            <div>
              <div className={styles['provider-term']}>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Ключ"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Операнд"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Значение"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <img src="images/plus_gray.svg" alt="plus" className={styles['provider-terms-plus']} />
                <img src="images/delete.svg" alt="delete" className={styles['provider-terms-delete']} />
              </div>
              <div className={styles['provider-term']}>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Ключ"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Операнд"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <div
                  className={classNames(styles['provider-content-input-wrapper'], styles['provider-term-input-wrapper'])}
                >
                  <input
                    type="text"
                    placeholder="Значение"
                    className={classNames(styles['provider-term-input'], styles['provider-content-input'])}
                  />
                  <img src="images/list_arrow.svg" alt="arrow" className={styles['provider-content-input-arrow']} />
                </div>
                <img src="images/plus_gray.svg" alt="plus" className={styles['provider-terms-plus']} />
                <img src="images/delete.svg" alt="delete" className={styles['provider-terms-delete']} />
              </div>
              <button className={styles['provider-access-button']}>
                Добавить условие
              </button>
            </div>
          </div>
          <div className={styles['provider-access-button-wrapper']}>
            <button className={styles['provider-access-button']}>
              Применить
            </button>
          </div>
        </div>
        <table className={styles['provider-table']}>
          <thead className={styles['provider-table-head']}>
            <th className={styles['provider-table-head-item']}>
              <input type="checkbox"/>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-title']}>Фото</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-title']}>Товар</span>
              <img src="images/sort.svg" alt="sort" />
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-title']}>Кол-во продаж</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-title']}>Остаток</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>У поставщика</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>ЦЗ</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>ЦП</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>ЦМ</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>КОМ.OZON</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>КОМ.WB</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>Ср.ЦЦ</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>Ср.Ц</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>Маржа</span>
            </th>
            <th className={styles['provider-table-head-item']}>
              <span className={styles['provider-table-head-item-text']}>Прибыль</span>
            </th>
          </thead>
          <tbody className={styles['provider-table-body']}>
            <tr className={styles['provider-table-body-row']}>
            <td className={styles['provider-table-body-data-checkbox']}>
              <input type="checkbox" />
            </td>
            <td className={styles['provider-table-body-data']}>
              <img src="images/clothes.svg" alt="clothes"/>
            </td>
            <td className={styles['provider-table-body-data']}>
              Кен и Барби 2 шт.
            </td>
            <td className={styles['provider-table-body-data-image']}>
              <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
              <span className={styles['provider-table-body-image-text']}>124</span>
              <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
              <span className={styles['provider-table-body-image-text']}>124</span>
            </td>
            <td className={styles['provider-table-body-inputs']}>
              <button className={styles['provider-table-body-button']}>
                <img src="images/minus.svg" alt="minus" />
              </button>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              <button className={styles['provider-table-body-button']}>
                <img src="images/plus_gray.svg" alt="plus" />
              </button>
            </td>
            <td className={styles['provider-table-body-text']}>
              23
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              1 342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              1 342 руб
            </td>
          </tr>
            <tr className={styles['provider-table-body-row']}>
            <td className={styles['provider-table-body-data-checkbox']}>
              <input type="checkbox" />
            </td>
            <td className={styles['provider-table-body-data']}>
              <img src="images/clothes.svg" alt="clothes"/>
            </td>
            <td className={styles['provider-table-body-data']}>
              Кен и Барби 2 шт.
            </td>
            <td className={styles['provider-table-body-data-image']}>
              <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
              <span className={styles['provider-table-body-image-text']}>124</span>
              <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
              <span className={styles['provider-table-body-image-text']}>124</span>
            </td>
            <td className={styles['provider-table-body-inputs']}>
              <button className={styles['provider-table-body-button']}>
                <img src="images/minus.svg" alt="minus" />
              </button>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              <button className={styles['provider-table-body-button']}>
                <img src="images/plus_gray.svg" alt="plus" />
              </button>
            </td>
            <td className={styles['provider-table-body-text']}>
              23
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              1 342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              342 руб
            </td>
            <td className={styles['provider-table-body-text']}>
              1 342 руб
            </td>
          </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
            <tr className={styles['provider-table-body-row']}>
              <td className={styles['provider-table-body-data-checkbox']}>
                <input type="checkbox" />
              </td>
              <td className={styles['provider-table-body-data']}>
                <img src="images/clothes.svg" alt="clothes"/>
              </td>
              <td className={styles['provider-table-body-data']}>
                Кен и Барби 2 шт.
              </td>
              <td className={styles['provider-table-body-data-image']}>
                <img src="images/wild_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
                <img src="images/ozon_24.png" alt="ozon" className={styles['provider-table-body-image']} />
                <span className={styles['provider-table-body-image-text']}>124</span>
              </td>
              <td className={styles['provider-table-body-inputs']}>
                <button className={styles['provider-table-body-button']}>
                  <img src="images/minus.svg" alt="minus" />
                </button>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
                <button className={styles['provider-table-body-button']}>
                  <img src="images/plus_gray.svg" alt="plus" />
                </button>
              </td>
              <td className={styles['provider-table-body-text']}>
                23
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2 912" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                <input type="text" placeholder="2" className={styles['provider-table-body-input']} />
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                342 руб
              </td>
              <td className={styles['provider-table-body-text']}>
                1 342 руб
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles['provider-bottom']}>
          <div className={styles['provider-bottom-additional']}>
            <span className={styles['provider-bottom-total']}>Total 85 items</span>
            <img src="images/arrow_left.svg" alt="left_arrow" className={styles['provider-bottom-arrow']} />
            <span className={styles['provider-bottom-number']}>1</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['provider-bottom-dats']} />
            <span className={styles['provider-bottom-number']}>4</span>
            <span className={styles['provider-bottom-number']}>5</span>
            <span className={styles['provider-bottom-number-blue']}>6</span>
            <span className={styles['provider-bottom-number']}>7</span>
            <span className={styles['provider-bottom-number']}>8</span>
            <img src="images/pagination_dats.svg" alt="dats" className={styles['provider-bottom-dats']} />
            <span className={styles['provider-bottom-number']}>50</span>
            <img src="images/arrow_right.svg" alt="right_arrow" className={styles['provider-bottom-arrow']} />
          </div>
          <div className={styles['provider-bottom-page']}>
            10 / page v
          </div>
          <div className={styles['provider-bottom-text']}>
            Go to
          </div>
          <div className={styles['provider-bottom-input-wrapper']}>
            <input type="text" className={styles['provider-bottom-input']} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductProviderPage;
