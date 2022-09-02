import React, {FC} from 'react';
import styles from "./OrdersPage.module.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import classNames from "classnames";
import AssemblyBegin from "../../components/modals/assemblyBegin/AssemblyBegin";

const OrdersPage: FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/*<AssemblyBegin text={'Сборка начинается'} />*/}
      {/*<AssemblyBegin text={'Поставка закрывается'} />*/}
      <div className={styles.orders}>
        <div className={styles['orders-content']}>
          <div className={styles['orders-header']}>
            <div className={styles['orders-header-filter']}>
              <button className={styles['orders-header-filter-button']}>
                <img src="images/plus.svg" alt="plus" className={styles['orders-header-filter-button-image']}/>
                <span className={styles['orders-header-filter-button-text']}>Больше фильтров</span>
              </button>
            </div>
            <div className={styles['orders-header-filter']}>
              <button
                className={classNames(
                  styles['orders-header-filter-button'], styles['orders-header-filter-button-active']
                )}
              >
                <span
                  className={classNames(
                    styles['orders-header-filter-button-text'], styles['orders-header-filter-button-text-active']
                  )}
                >
                  Скрыть фильтры
                </span>
              </button>
            </div>
            <input type="text" className={styles['orders-header-search']} placeholder="Искать по номеру заказа"/>
            <button className={styles['orders-header-button']}>
              <span className={styles['orders-header-button-text']}>Поиск</span>
            </button>
          </div>
          <div className={styles['orders-header-inputs']}>
            <div className={styles['orders-header-input-wrapper']}>
              <input
                type="text"
                className={classNames(styles['orders-header-input'], styles['orders-header-input-date'])}
              />
              <div className={styles['orders-header-input-placeholder']}>
                <span className={styles['orders-header-input-text']}>Заказы с </span>
                <img src="images/swap_right.svg" alt="swap" className={styles['orders-header-input-swap']} />
                <span className={styles['orders-header-input-text']}>Заказы по</span>
                <img src="images/calendar.svg" alt="arrow" className={styles['orders-header-input-calendar']} />
              </div>
            </div>
            <div className={styles['orders-header-input-wrapper']}>
              <input
                type="text"
                className={classNames(
                  styles['orders-header-input'],
                  styles['orders-header-input-date'],
                  styles['orders-header-input-date-long']
                )}
              />
              <div className={styles['orders-header-input-placeholder']}>
                <span className={styles['orders-header-input-text']}>Отгрузка с</span>
                <img src="images/swap_right.svg" alt="swap" className={styles['orders-header-input-swap']} />
                <span className={styles['orders-header-input-text']}>Отгрузка по</span>
                <img src="images/calendar.svg" alt="arrow" className={styles['orders-header-input-calendar']} />
              </div>
            </div>
            <div className={styles['orders-header-input-wrapper']}>
              <input
                type="text"
                className={classNames(
                    styles['orders-header-input'],
                    styles['orders-header-input-date'],
                    styles['orders-header-input-date-long']
                )}
              />
              <div className={styles['orders-header-input-placeholder']}>
                <span className={styles['orders-header-input-text']}>Доставка с </span>
                <img src="images/swap_right.svg" alt="swap" className={styles['orders-header-input-swap']} />
                <span className={styles['orders-header-input-text']}>Доставка по</span>
                <img src="images/calendar.svg" alt="arrow" className={styles['orders-header-input-calendar']} />
              </div>
              <div className={styles['orders-calendar']}>
                <div className={styles['orders-calendar-buttons']}>
                  <button className={styles['orders-calendar-button']}>
                    <span className={styles['orders-calendar-button-text']}>Май</span>
                    <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-calendar-button-arrow']} />
                  </button>
                  <button className={styles['orders-calendar-button']}>
                    <span className={styles['orders-calendar-button-text']}>2020</span>
                    <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-calendar-button-arrow']} />
                  </button>
                </div>
                <table className={styles['orders-calendar-table']}>
                  <thead className={styles['orders-calendar-table-head']}>
                    <th className={styles['orders-calendar-table-head-item']}>
                      Пн
                    </th>
                    <th className={styles['orders-calendar-table-head-item']}>
                      Вт
                    </th>
                    <th className={styles['orders-calendar-table-head-item']}>
                      Ср
                    </th>
                    <th className={styles['orders-calendar-table-head-item']}>
                      Чт
                    </th>
                    <th
                      className={classNames(
                        styles['orders-calendar-table-head-item'], styles['orders-calendar-table-head-item-black']
                      )}
                    >
                      Пт
                    </th>
                    <th className={classNames(
                        styles['orders-calendar-table-head-item'], styles['orders-calendar-table-head-item-black']
                      )}
                    >
                      Сб
                    </th>
                    <th className={classNames(
                        styles['orders-calendar-table-head-item'], styles['orders-calendar-table-head-item-black']
                    )}
                    >
                      Вс
                    </th>
                  </thead>
                  <tbody className={styles['orders-calendar-table-body']}>
                    <tr className={styles['orders-calendar-table-body-row']}>
                      <td
                        className={classNames(
                          styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-prev']
                        )}
                      >
                        27
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-prev']
                      )}>
                        28
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-prev']
                      )}>
                        29
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-prev']
                      )}>
                        30
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        1
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        2
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        3
                      </td>
                    </tr>
                    <tr className={styles['orders-calendar-table-body-row']}>
                      <td className={styles['orders-calendar-table-body-data']}>
                        4
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        5
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        6
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        7
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        8
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        9
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        10
                      </td>
                    </tr>
                    <tr className={styles['orders-calendar-table-body-row']}>
                      <td className={styles['orders-calendar-table-body-data']}>
                        11
                      </td>
                      <td className={classNames(styles['orders-calendar-table-body-pick-start'])}>
                        <span className={styles['orders-calendar-table-body-data-pick']}>
                          1
                        </span>
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-red']
                      )}
                      >
                        13
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-red']
                      )}>
                        14
                      </td>
                      <td className={classNames(
                        styles['orders-calendar-table-body-data'], styles['orders-calendar-table-body-data-red']
                      )}>
                        15
                      </td>
                      <td className={styles['orders-calendar-table-body-pick-end']}>
                        <span className={styles['orders-calendar-table-body-data-pick']}>
                          1
                        </span>
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        17
                      </td>
                    </tr>
                    <tr className={styles['orders-calendar-table-body-row']}>
                      <td className={styles['orders-calendar-table-body-data']}>
                        18
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        19
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        20
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        21
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        22
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        23
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        24
                      </td>
                    </tr>
                    <tr className={styles['orders-calendar-table-body-row']}>
                      <td className={styles['orders-calendar-table-body-data']}>
                        25
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        26
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        27
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        28
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        29
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        30
                      </td>
                      <td className={styles['orders-calendar-table-body-data']}>
                        31
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles['orders-calendar-timer']}>
                  <h4 className={styles['orders-calendar-timer-title']}>ВРЕМЯ</h4>
                  <div className={styles['orders-calendar-timer-info']}>
                    <span className={styles['orders-calendar-timer-info-text']}>с</span>
                    <input type="text" placeholder="00:00" className={styles['orders-calendar-timer-info-input']} />
                    <span className={styles['orders-calendar-timer-info-text']}>до</span>
                    <input type="text" placeholder="00:00" className={styles['orders-calendar-timer-info-input']} />
                  </div>
                </div>
                <div className={styles['orders-calendar-buttons']}>
                  <button className={styles['orders-calendar-button-cancel']}>
                    Отмена
                  </button>
                  <button className={styles['orders-calendar-button-save']}>
                    Задать
                  </button>
                </div>
              </div>
            </div>
            <div className={styles['orders-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Маркетплейс"
                className={styles['orders-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-content-input-arrow']} />
            </div>
            <div className={styles['orders-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Склад"
                className={styles['orders-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-content-input-arrow']} />
            </div>
            <div className={styles['orders-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Статус заказа"
                className={styles['orders-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-content-input-arrow']} />
            </div>
            <div className={styles['orders-content-input-wrapper']}>
              <input
                type="text"
                placeholder="Поставщик"
                className={styles['orders-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-content-input-arrow']} />
            </div>
            <div className={styles['orders-content-input-wrapper']}>
              <input
                type="text"
                placeholder="FBS"
                className={styles['orders-content-input']}
              />
              <img src="images/list_arrow.svg" alt="arrow" className={styles['orders-content-input-arrow']} />
            </div>
          </div>
          <div className={styles['orders-links']}>
            <a href="#" className={styles['orders-links-link']}>Все отправления</a>
            <div className={styles['orders-links-list']}>
              <a href="#" className={styles['orders-links-item']}>
                Ожидают сборки
                <span className={classNames(styles['orders-links-item-count'], styles['orders-links-item-count-first'])}>
                  929
                </span>
              </a>
              <a href="#" className={styles['orders-links-item']}>
                Ожидают отгрузки
                <span className={styles['orders-links-item-count']}>123</span>
              </a>
              <a href="#" className={styles['orders-links-item']}>
                Доставляются
                <span className={styles['orders-links-item-count']}>929</span>
              </a>
              <a href="#" className={styles['orders-links-item']}>
                Доставлены
                <span className={styles['orders-links-item-count']}>35678</span>
              </a>
              <a href="#" className={styles['orders-links-item']}>
                Отменены
                <span className={classNames(styles['orders-links-item-count'], styles['orders-links-item-count-last'])}>
                  2
                </span>
              </a>
            </div>
          </div>
          <div className={styles['orders-departures']}>
            <div className={styles['orders-departures-button-wrapper']}>
              <button className={styles['orders-departures-button']}>
                <h4 className={styles['orders-departures-button-title']}>Все отправления</h4>
                <span className={styles['orders-departures-button-description']}>21 отправление</span>
              </button>
            </div>
            <div className={styles['orders-departures-button-wrapper']}>
              <button className={styles['orders-departures-button']}>
                <h4 className={styles['orders-departures-button-title']}>Отправления 19.04</h4>
                <span className={styles['orders-departures-button-description']}>21 отправление</span>
              </button>
            </div>
            <div className={styles['orders-departures-button-wrapper']}>
              <button className={styles['orders-departures-button']}>
                <h4 className={styles['orders-departures-button-title']}>Отправления 20.04</h4>
                <span className={styles['orders-departures-button-description']}>21 отправление</span>
              </button>
            </div>
            <div className={styles['orders-departures-button-wrapper']}>
              <button className={styles['orders-departures-button']}>
                <h4 className={styles['orders-departures-button-title']}>Отправления 21.04</h4>
                <span className={styles['orders-departures-button-description']}>21 отправление</span>
              </button>
            </div>
            <div className={styles['orders-departures-start-button-wrapper']}>
              <button className={styles['orders-departures-start-button']}>
                Начать сборку
              </button>
            </div>
            <div className={styles['orders-departures-add-button-wrapper']}>
              <button className={styles['orders-departures-add-button']}>
                Добавить к сборке
              </button>
            </div>
            <div className={styles['orders-departures-cancel-button-wrapper']}>
              <button className={styles['orders-departures-cancel-button']}>
                Закрыть поставку
              </button>
            </div>
          </div>
        </div>
        <table className={styles['orders-table']}>
            <thead className={styles['orders-table-head']}>
              <th className={styles['orders-table-head-item']}>
                <input type="checkbox"/>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-title']}>Дата</span>
                <img src="images/sort.svg" alt="sort" />
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-title']}>Статус</span>
                <img src="images/sort.svg" alt="sort" />
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-title']}>Маркетплейс</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-title']}>ID заказа</span>
                <img src="images/sort.svg" alt="sort" />
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-title']}>Товар</span>
                <img src="images/sort.svg" alt="sort" />
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>Кол-во</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>ЦП</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>ЦЗ</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>КОМ</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>Прибыль</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>Отгрузка</span>
              </th>
              <th className={styles['orders-table-head-item']}>
                <span className={styles['orders-table-head-item-text']}>Склад</span>
              </th>
            </thead>
            <tbody className={styles['orders-table-body']}>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Доставляется</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/wild_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Доставляется</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/wild_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={classNames(styles['orders-table-body-row'], styles['orders-table-body-row-blue'])}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
                <div className={styles['orders-card']}>
                  <div className={styles['orders-card-item']}>
                    <img src="images/edit_blue.svg" alt="edit"/>
                    <span className={classNames(styles['orders-card-item-text'], styles['orders-card-item-text-blue'])}>
                  Подбор лист
                </span>
                  </div>
                  <div className={styles['orders-card-item']}>
                    <img src="images/edit_bold.svg" alt="edit"/>
                    <span className={styles['orders-card-item-text']}>Маркировка заказов</span>
                  </div>
                  <div className={styles['orders-card-item']}>
                    <img src="images/edit.svg" alt="edit"/>
                    <span className={styles['orders-card-item-text']}>Баркод поставки</span>
                  </div>
                </div>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Доставляется</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/wild_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Доставляется</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/wild_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022 13:30</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Ожидает упаковки</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/ozon_table.svg" alt="ozon"/>
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
              <tr className={styles['orders-table-body-row']}>
                <td className={styles['orders-table-body-data-checkbox']}>
                  <input type="checkbox" />
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>12.04.2022</span>
                </td>
                <td className={styles['orders-table-body-data']}>
                  <span>Доставляется</span>
                </td>
                <td className={styles['orders-table-body-data-image']}>
                  <img src="images/wild_table.svg" alt="ozon" className={styles['orders-table-body-image']} />
                </td>
                <td className={styles['orders-table-body-data']}>
                  35621
                </td>
                <td className={styles['orders-table-body-data']}>
                  Кен и Барби 2 шт.
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  1 342 руб
                </td>
                <td className={styles['orders-table-body-text']}>
                  467
                </td>
                <td className={styles['orders-table-body-text']}>
                  321
                </td>
                <td className={styles['orders-table-body-text']}>
                  554
                </td>
                <td className={styles['orders-table-body-text']}>
                  2
                </td>
                <td className={styles['orders-table-body-text']}>
                  Москва Патрики
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles['orders-bottom']}>
            <div className={styles['orders-bottom-additional']}>
              <span className={styles['orders-bottom-total']}>Total 85 items</span>
              <img src="images/arrow_left.svg" alt="left_arrow" className={styles['orders-bottom-arrow']} />
              <span className={styles['orders-bottom-number']}>1</span>
              <img src="images/pagination_dats.svg" alt="dats" className={styles['orders-bottom-dats']} />
              <span className={styles['orders-bottom-number']}>4</span>
              <span className={styles['orders-bottom-number']}>5</span>
              <span className={styles['orders-bottom-number-blue']}>6</span>
              <span className={styles['orders-bottom-number']}>7</span>
              <span className={styles['orders-bottom-number']}>8</span>
              <img src="images/pagination_dats.svg" alt="dats" className={styles['orders-bottom-dats']} />
              <span className={styles['orders-bottom-number']}>50</span>
              <img src="images/arrow_right.svg" alt="right_arrow" className={styles['orders-bottom-arrow']} />
            </div>
            <div className={styles['orders-bottom-page']}>
              10 / page v
            </div>
            <div className={styles['orders-bottom-text']}>
              Go to
            </div>
            <div className={styles['orders-bottom-input-wrapper']}>
              <input type="text" className={styles['orders-bottom-input']} />
            </div>
          </div>
      </div>
    </>
  );
};

export default OrdersPage;
