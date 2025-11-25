import { Modal, Button, Row, Col } from "react-bootstrap";
import caloriesIcon from "../../../assets/calories.svg";
import butterIcon from "../../../assets/butter.svg";
import proteinIcon from "../../../assets/protein.svg";

export default function CheckoutModalWithinCal({
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
        weeklyCaloriesGoal = 0,
        weeklyCaloriesAfter = 0,
        weeklyProteinGoal = 0,
        weeklyProteinAfter = 0,
        weeklyFatGoal = 0,
        weeklyFatAfter = 0,
      } = stats;
    
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header >
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        <h3>
          Great work! Check your account for more details.
        </h3>
      </Modal.Body>
      <Modal.Footer>
    
        <Button
          variant="primary"
          onClick={onConfirm}
          disabled={isCheckingOut}
        >
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
}