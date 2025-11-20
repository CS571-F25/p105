import { useState, useMemo, useContext, useEffect } from "react";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  FloatingLabel,
  Alert,
  ProgressBar,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  
} from "react-bootstrap";
import { useNavigate,  } from "react-router-dom";
import DailyGoalsCard from "../websitePages/componentsPage/dailyGoalsCard.jsx";
import svgBackground from "../../assets/backLogin.svg";
import CardAccount from "../websitePages/componentsPage/cardAccount.jsx";
import GoalsCardAccount from "./componentsPage/goalsCardAccount.jsx";
import { AuthContext } from "../structural/CalorieCartApp.jsx";

export default function store() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
  const weightLbs = user?.weight ?? 180; // default if not set
  
  
    const totalInches =
      user?.heightFt != null && user?.heightIn != null
        ? user.heightFt * 12 + user.heightIn
        : 68; 
    let baseCalories =
      2500 +
      (weightLbs - 180) * 5 + 
      (totalInches - 68) * 5;
      if (baseCalories < 1800) baseCalories = 1800;
        if (baseCalories > 3200) baseCalories = 3200;
      
        let dailyCalories = baseCalories;
        if (user?.gainSelected) {
          dailyCalories += 300;
        } else if (user?.loseSelected) {
          dailyCalories -= 300;
        }
      
        const proteinPerLb =
          user?.gainSelected || user?.loseSelected ? 1.0 : 0.8;
        const proteinGoal = weightLbs * proteinPerLb;
      
        const fatGoal = (dailyCalories * 0.3) / 9;

        const weeklyProgress = user?.weeklyProgress ?? {
              caloriesConsumed: 0,
              proteinConsumed: 0,
              fatConsumed: 0,
          }; 

        const dailyGoals = {
          caloriesConsumed: 0,                   
          caloriesGoal: Math.round(dailyCalories),
          proteinConsumed: 0,
          proteinGoal: Math.round(proteinGoal),
          fatConsumed: 0,
          fatGoal: Math.round(fatGoal),
        };
      
        const weeklyGoals = {
          caloriesConsumed: weeklyProgress.caloriesConsumed,
          caloriesGoal: dailyGoals.caloriesGoal * 7,
          proteinConsumed: weeklyProgress.proteinConsumed,
          proteinGoal: dailyGoals.proteinGoal * 7,
          fatConsumed: weeklyProgress.fatConsumed,
          fatGoal: dailyGoals.fatGoal * 7,
       };

      
      

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <img
        src={svgBackground}
        alt="background texture"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: 0,
          animation: "float 20s linear infinite alternate",
        }}
      />
      <Container
        fluid
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: 24,
        
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
        <Row style={{ alignItems: "center", display: "flex" }}>
          <Col xs="auto">
            <CardAccount user={user} />
          </Col>
          <Col xs="auto">
          <GoalsCardAccount
             weeklyGoals={weeklyGoals}
              gainSelected={user?.gainSelected}
              loseSelected={user?.loseSelected}
            />
          </Col>
        </Row>
       
        <Row style={{ marginTop: 16 }}>
            <Col xs={12}>
              <DailyGoalsCard values={dailyGoals} />
              
            </Col>
          </Row>
          </div>
      </Container>
    </div>
  );
}
