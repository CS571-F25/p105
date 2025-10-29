// src/components/structural/CalorieCartApp.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import CalorieCartAppLayout from "./calorieCartAppLayout";
import Home from "../websitePages/homePage";
import LoginPage from "../websitePages/loginPage";

export default function CalorieCartApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CalorieCartAppLayout />}>
          <Route index element={<Home />} />  
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
