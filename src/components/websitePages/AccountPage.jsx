import { useState } from "react";
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
  ToggleButtonGroup
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import svgBackground from "../../assets/backLogin.svg";
import CardAccount from "../websitePages/componentsPage/cardAccount.jsx"
import GoalsCardAccount from "../websitePages/componentsPage/goalsCardAccount.jsx"
export default function MeatStore() {
  const navigate = useNavigate();

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
          alignItems:"center",
          justifyContent: "center", 
          display:"flex",
          paddingBottom: 24,
        }}
      >
        <Row style={{ alignItems: "center", display: "flex" }}>
          <Col xs="auto">
            <CardAccount/>
          </Col>
          <Col xs="auto">
            <GoalsCardAccount/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
