import { Modal, Row, Col, Button } from "react-bootstrap";
import warningIcon from "../../../assets/warning.svg";
import caloriesIcon from "../../../assets/calories.svg";
import butterIcon from "../../../assets/butter.svg";
import proteinIcon from "../../../assets/protein.svg";

export default function CheckoutModalOverCal({
  show,
  onHide,
  stats,
  onConfirm,
  isCheckingOut,
}) {
  if (!stats) {
    stats = {};
  }

  const {
    dailyCaloriesGoal = 0,
    dailyCaloriesAfter = 0,
    weeklyCaloriesGoal = 0,
    weeklyCaloriesAfter = 0,
    weeklyProteinGoal = 0,
    weeklyProteinAfter = 0,
    weeklyFatGoal = 0,
    weeklyFatAfter = 0,
  } = stats;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Calorie Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ marginBottom: 16 }}>
          <h4 style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img
              src={warningIcon}
              alt="warning"
              style={{ width: 32, height: 32 }}
            />
            Daily Calories
          </h4>
          <p style={{ marginBottom: 4 }}>
            Daily goal: <strong>{Math.round(dailyCaloriesGoal)} cal</strong>
          </p>
          <p style={{ marginBottom: 4 }}>
            Estimated calories daily average after checkout is above daily limit by {" "}
            <strong>{Math.round(dailyCaloriesAfter)} cal</strong>
          </p>
        </div>

        <div style={{ marginBottom: 16 }}>
          <h4>Weekly Stats</h4>
          <p style={{ marginBottom: 8 }}>Weekly calories, fat and protein after purchace.</p>
          <Row>
            <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 12 }}>
              <h5>Calories</h5>
              <img
                src={caloriesIcon}
                alt="calories"
                style={{ width: 40, height: 40, marginBottom: 4 }}
              />
              <p style={{ marginBottom: 0 }}>
                {Math.round(weeklyCaloriesAfter)} /{" "}
                {Math.round(weeklyCaloriesGoal)} cal
              </p>
            </Col>

            <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 12 }}>
              <h5>Protein</h5>
              <img
                src={proteinIcon}
                alt="protein"
                style={{ width: 40, height: 40, marginBottom: 4 }}
              />
              <p style={{ marginBottom: 0 }}>
                {Math.round(weeklyProteinAfter)} /{" "}
                {Math.round(weeklyProteinGoal)} g
              </p>
            </Col>

            <Col xs={12} md={4} style={{ textAlign: "center", marginBottom: 12 }}>
              <h5>Fat</h5>
              <img
                src={butterIcon}
                alt="fat"
                style={{ width: 40, height: 40, marginBottom: 4 }}
              />
              <p style={{ marginBottom: 0 }}>
                {Math.round(weeklyFatAfter)} / {Math.round(weeklyFatGoal)} g
              </p>
            </Col>
          </Row>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Continue Shopping
        </Button>
        <Button
          variant="primary"
          onClick={onConfirm}
          disabled={isCheckingOut}
        >
          {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
