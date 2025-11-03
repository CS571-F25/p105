// src/components/structural/CalorieCartApp.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import CalorieCartAppLayout from "./calorieCartAppLayout";
import Home from "../websitePages/homePage";
import LoginPage from "../websitePages/loginPage";
import StorePage from "../websitePages/storePage";

export default function CalorieCartApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CalorieCartAppLayout />}>
          <Route index element={<Home />} />  
          <Route path="login" element={<LoginPage />} />
          <Route path="store/:type" element={<StorePage />} /> 
        </Route>
      </Routes>
    </HashRouter>
  );
}
