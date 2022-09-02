import React, {FC} from 'react';
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from './SettingsPage.module.scss';
import ProviderMenu from "./menu/providerMenu/ProviderMenu";
import CreateMarketplaceMenu from "./menu/createMarketplaceMenu/CreateMarketplaceMenu";
import StorageMenu from "./menu/storageMenu/StorageMenu";

const SettingsPage: FC = () => {
  return (
    <div>
      <Header />
      <StorageMenu />
      <Navbar />
      <div className={styles['settings-content']}>
        <div className={styles['settings-card']}>
          <h2 className={styles['settings-card-title']}>Склады</h2>
          <div className={styles['settings-card-items']}>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Склад на Тверской</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/settings.svg" alt="settings" className={styles['settings-card-item-settings']} />
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Склад на Баумана</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/settings.svg" alt="settings" className={styles['settings-card-item-settings']} />
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Склад на Патриках</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/settings.svg" alt="settings" className={styles['settings-card-item-settings']} />
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
          </div>
          <div className={styles['settings-card-button-wrapper']}>
            <button className={styles['settings-card-button']}>
              Добавить склад
            </button>
          </div>
        </div>
        <div className={styles['settings-card']}>
          <h2 className={styles['settings-card-title']}>Поставщики</h2>
          <div className={styles['settings-card-items']}>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Поставщик 1</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Поставщик 2</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>Поставщик 3</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
          </div>
          <div className={styles['settings-card-button-wrapper']}>
            <button className={styles['settings-card-button']}>
              Добавить поставщика
            </button>
          </div>
        </div>
        <div className={styles['settings-card']}>
          <h2 className={styles['settings-card-title']}>Маркетплейсы</h2>
          <div className={styles['settings-card-items']}>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>озон </span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
            <div className={styles['settings-card-item']}>
              <span className={styles['settings-card-item-text']}>вайлдбериес 2</span>
              <div className={styles['settings-card-item-images']}>
                <img src="images/editor.svg" alt="editor" className={styles['settings-card-item-editor']} />
              </div>
            </div>
          </div>
          <div className={styles['settings-card-button-wrapper']}>
            <button className={styles['settings-card-button']}>
              Добавить маркетплейс
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
