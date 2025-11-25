import {
  Card,
  Button,
  ProgressBar,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
export default function goalsCardAccount({ weeklyGoals, loseSelected, gainSelected, onEditGoals}) {
  const caloriesConsumed = weeklyGoals.caloriesConsumed ?? 0;
  const caloriesGoal = weeklyGoals.caloriesGoal ?? 2500 * 7;
  const proteinConsumed = weeklyGoals.proteinConsumed ?? 0;
  const proteinGoal = weeklyGoals.proteinGoal ?? 140 * 7;
  const fatConsumed = weeklyGoals.fatConsumed ?? 0;
  const fatGoal = weeklyGoals.fatGoal ?? 80 * 7;

  const caloriesPct = caloriesGoal
    ? Math.min(100, (caloriesConsumed / caloriesGoal) * 100)
    : 0;
  const proteinPct = proteinGoal
    ? Math.min(100, (proteinConsumed / proteinGoal) * 100)
    : 0;
  const fatPct = fatGoal ? Math.min(100, (fatConsumed / fatGoal) * 100) : 0;



  return (
    <Card
      style={{
        width: 700,
        height: 400,
        borderRadius: 20,
        display: "flex",
      }}
      id="Account Goals"
    >
      <Card.Header
        style={{
          backgroundColor: "#59b371",
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
        }}
      >
        <Card.Title style={{ alignItems: "center" }}>Weekly Goals</Card.Title>

        <Button
          size="sm"
          variant="light"
          style={{ color: "#2b7a4b", borderRadius: 10 }}
          onClick={onEditGoals}
        >
          Edit
        </Button>
      </Card.Header>

      <Card.Body style={{ padding: 20 }}>
        <div style={{ marginTop: 10 }}>
          <h5>Calories Consumed</h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>
              {caloriesConsumed}
            </span>
            <div style={{ flex: 1, margin: "8px" }}>
              <ProgressBar
                style={{
                  "--bs-progress-bar-bg": "#35b000",
                  fontWeight: 600,
                }}
                now={caloriesPct}
                label="Calories"
              />
            </div>
            <span style={{ fontSize: 14, fontWeight: 500 }}>
             {caloriesGoal}
            </span>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <h5>Protein Consumed</h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
          <span style={{ fontSize: 14, fontWeight: 500 }}>
             {proteinConsumed}g
           </span>
            <div style={{ flex: 1, margin: " 8px" }}>
              <ProgressBar
                style={{
                  "--bs-progress-bar-bg": "#f54f2a",
                  fontWeight: 600,
                }}
                now={proteinPct}
                label="Protein"
              />
            </div>
            <span style={{ fontSize: 14, fontWeight: 500 }}>
              {proteinGoal}g
            </span>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <h5>Fat Consumed</h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>
              {fatConsumed}g
            </span>
            <div style={{ flex: 1, margin: " 8px" }}>
              <ProgressBar
                now={fatPct}
                label="fat%"
                style={{
                  "--bs-progress-bar-bg": "#e3aa0e",
                  height: "18px",
                  fontWeight: 600,
                  borderRadius: "8px",
                }}
              />
            </div>

            <span style={{ fontSize: 14, fontWeight: 500 }}>
             {fatGoal}g
           </span>
          </div>
        </div>
        <div style={{ marginTop: 8, marginBottom: 8 }}>
          <ToggleButton
            id="goal-gain"
            type="checkbox"
            variant={gainSelected ? "primary" : "outline-primary"}
            checked={gainSelected}
            disabled
            value="gain"
            style={{ marginRight: 8 }}
          >
            Gain Weight
          </ToggleButton>

          <ToggleButton
            id="goal-lose"
            type="checkbox"
            variant={loseSelected ? "primary" : "outline-primary"}
            checked={loseSelected}
            disabled
            value="lose"
          >
            Lose Weight
          </ToggleButton>
        </div>
      </Card.Body>
    </Card>
  );
}
