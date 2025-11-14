import { Offcanvas, Container, Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CheckoutItem from "./checkoutButtonCard"
import CheckoutPopItem from "../componentsPage/checkoutPopItems";
export default function CheckoutComponent({ show, handleClose, qty, setQty}) {
  const navigate = useNavigate();

    const add = () => setQty(qty +1);
    const subtract = () => qty > 1 && setQty(qty-1);
  
  const CheckoutBoxStyle = {
    width: "100%",
    height: 600,
  };
  const badgeStyle = {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 600,
  };
  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const itemsScrollStyle = {
    flex: 1,
    overflowY: "auto",
    marginTop: 16,
    marginBottom: 16,
  };

  return (
    <div>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <h4 style={{ margin: 0 }}>Your cart</h4>
        </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Container style={bodyStyle}>
          <div style={itemsScrollStyle}>
          <CheckoutPopItem qty={qty} add={add} subtract={subtract} />

          </div>

          <hr />

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 12,
              }}
            >
              <span style={{ fontSize: 16, fontWeight: 500 }}>
                Estimated total
              </span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>
                {(qty * 29.99).toFixed(2)} USD
              </span>
            </div>

            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={() => {
                handleClose();
                navigate("/checkout");
              }}
            >
              Check Out
            </Button>
          </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />
    </div>
  );
}
