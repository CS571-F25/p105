import {
  CardBody,
  Card,
  ButtonGroup,
  ToggleButton,
  Form,
  Row,
  FloatingLabel,
  Button,
  ToggleButtonGroup,
  Container,
  CardTitle,
  Col,
  CardFooter,
} from "react-bootstrap";
import { useCallback, useState } from "react";
import SvgTexture from "../../assets/backLogin.svg";
export default function register() {
  const [weight, SetWeight] = useState(0);
  const [height, SetHeight] = useState(0);
  const [goals, SetGoals] = useState([]);

  const ft = Math.floor(height / 12);
  const inch = height % 12;
  const gainSelected = goals.includes(1);
  const loseSelected = goals.includes(2);

  const HandleSubmit = useCallback(() => {}, []);
  const HandleWeight = useCallback(() => {}, []);

  const HandleHeight = useCallback(() => {}, []);
  const HandleGoals = useCallback(() => {}, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
      }}
    >
      <img
        src={SvgTexture}
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

      <Container style={{ position: "relative", zIndex: 1 }}>
        <Card
          style={{
            maxWidth: 720,
            borderRadius: "20px",
            margin: "0 auto", // Add this line
          }}
        >
          <Card.Header
            style={{
              background: "#59b371",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: "18px 16px",
            }}
          >
            <h2
              className="mb-3 text-center"
              style={{ color: "white", marginTop: 10, fontFamily: "Poppins" }}
            >
              Register
            </h2>
          </Card.Header>

          <CardBody
            style={{
              margin: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 16,
              paddingTop: 16,
            }}
          >
            <Form>
              <FloatingLabel label="Username" className="mb-3">
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  autoComplete="none"
                />
              </FloatingLabel>

              <FloatingLabel label="Password" className="mb-3">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                />
              </FloatingLabel>

              <FloatingLabel label="Pre-Password" className="mb-3">
                <Form.Control
                  name="pre-password"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="new-password"
                />
              </FloatingLabel>

              <Col
                md={8}
                xs={12}
                style={{ paddingRight: 8, paddingLeft: 8, marginBottom: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 6,
                  }}
                >
                  <Col>
                    <Form.Label>Weight</Form.Label>
                    <Form.Range />
                  </Col>
                </div>
              </Col>

              <Col
                md={8}
                xs={12}
                style={{ paddingRight: 8, paddingLeft: 8, marginBottom: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 6,
                  }}
                >
                  <Col>
                    <Form.Label>Height</Form.Label>
                    <Form.Range />
                  </Col>
                </div>
              </Col>

              <ToggleButtonGroup
                type="checkbox"
                name="options"
                defaultValue={1}
              >
                <ToggleButton id="tbg-radio-1" value={1}>
                  Gain Weight
                </ToggleButton>
                <ToggleButton id="tbg-radio-1" value={2}>
                  Lose Weight
                </ToggleButton>
              </ToggleButtonGroup>
              <br />
            </Form>
          </CardBody>
          <CardFooter style={{ padding: 0, borderTop: "none" }}>
            <Button
              variant="primary"
              type="submit"
              style={{
                display: "block",
                width: "100%",
                paddingTop: 16,
                paddingBottom: 16,
                borderRadius: 0,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              Register
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </div>
  );
}
