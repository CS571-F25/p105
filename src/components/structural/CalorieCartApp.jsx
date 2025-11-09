// src/components/structural/CalorieCartApp.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import CalorieCartAppLayout from "./calorieCartAppLayout";
import Home from "../websitePages/homePage";
import LoginPage from "../websitePages/loginPage";
import StorePage from "../websitePages/storePage";
import RegisterPage from "../websitePages/registerPage";
import AccountPage from "../websitePages/AccountPage";
import CheckoutPage from "../websitePages/checkoutPage";
export default function CalorieCartApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CalorieCartAppLayout />}>
          <Route index element={<Home />} />  
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="store/:type" element={<StorePage />} /> 
          <Route path="Account" element={<AccountPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
