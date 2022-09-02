import React from 'react';
import LoginPage from "./loginPage/LoginPage";
import MainPage from "./mainPage/MainPage";
import OrdersPage from "./ordersPage/OrdersPage";
import RegisterPage from "./registerPage/RegisterPage";
import DeliveryPage from "./deliveryPage/DeliveryPage";
import PurchasePage from "./purchasePage/PurchasePage";
import SettingsPage from "./settingsPage/SettingsPage";
import SchedulePage from "./schedulePage/SchedulePage";
import ProductProviderPage from "./productsProviderPage/ProductProviderPage";

const CommonPage = () => {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export default CommonPage;
