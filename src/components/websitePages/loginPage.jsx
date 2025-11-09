import { useState } from "react";
import { Form, Button, Card, Container, Row, Col, FloatingLabel, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import SvgTexture from "../../assets/backLogin.svg";

export default function LoginPage() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = data.get("username")?.trim();
    const pass = data.get("password")?.trim();

    if (!user || !pass) {
      setErr("Please enter both username and password.");
      return;
    }

    // TODO: replace with your real auth; for now just route home
    navigate("/");
  }

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
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

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xxl={5}>
            <Card style={{ backdropFilter: "blur(6px)", background: "rgba(255,255,255,0.85)" }}>
              <Card.Body className="p-4">
                <h2 className="mb-3 text-center">Login</h2>

                {err && <Alert variant="danger" onClose={() => setErr("")} dismissible>{err}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <FloatingLabel label="Username" className="mb-3">
                    <Form.Control name="username" type="text" placeholder="Username" autoComplete="none" />
                  </FloatingLabel>

                  <FloatingLabel label="Password" className="mb-3">
                    <Form.Control name="password" type="password" placeholder="Password" autoComplete="new-password" />
                  </FloatingLabel>

                  <div className="d-grid gap-2">
                    <Button type="submit" variant="success">Sign in</Button>
                  </div>
                </Form>

                <div className="mt-3 text-center">
                  <small>
                    Don’t have an account? <Link to="/register">Register</Link>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
