// CalorieCartApp.jsx
import { HashRouter, Routes, Route } from "react-router-dom"
import React, { useState, useMemo, useEffect, createContext } from "react";

import CalorieCartAppLayout from "./calorieCartAppLayout";
import Home from "../websitePages/homePage";
import LoginPage from "../websitePages/loginPage";
import StorePage from "../websitePages/storePage";
import RegisterPage from "../websitePages/registerPage";
import AccountPage from "../websitePages/AccountPage";
import CheckoutPage from "../websitePages/checkoutPage";

export const AuthContext = React.createContext(null);
export const Cart = React.createContext(null);

export default function CalorieCartApp() {
  const [cart,setCart] = useState(null);
  const [user, setUser] = useState(()=>{
    const raw = localStorage.getItem("caloriecart_user");
    return raw ? JSON.parse(raw) : null;
  })
 
  useEffect(() => {
        if (user) {
          localStorage.setItem("caloriecart_user", JSON.stringify(user));
        } else {
          localStorage.removeItem("caloriecart_user");
        }
      }, [user]);

  const authValue = useMemo(() => ({ user, setUser }), [user]);

  const cartTracker = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <AuthContext.Provider value={authValue}>
    <Cart.Provider value={cartTracker}>
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
    </Cart.Provider>
    </AuthContext.Provider>
  );
}
