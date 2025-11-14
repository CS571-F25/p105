// CalorieCartApp.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
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
        <Route
          path="/"
          element={
            <CalorieCartAppLayout>
              <Home />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="/login"
          element={
            <CalorieCartAppLayout>
              <LoginPage />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="/register"
          element={
            <CalorieCartAppLayout>
              <RegisterPage />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="/store/:type"
          element={
            <CalorieCartAppLayout>
              <StorePage />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="/Account"
          element={
            <CalorieCartAppLayout>
              <AccountPage />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="/checkout"
          element={
            <CalorieCartAppLayout>
              <CheckoutPage />
            </CalorieCartAppLayout>
          }
        />

        <Route
          path="*"
          element={
            <CalorieCartAppLayout>
              <div>Page Not Found</div>
            </CalorieCartAppLayout>
          }
        />
      </Routes>
    </HashRouter>
  );
}
