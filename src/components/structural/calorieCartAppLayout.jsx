import { Container, Navbar, Nav, NavDropdown, Button, Offcanvas } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import crest from "../../assets/uw-crest.svg";
import cart from "../../assets/cart.svg";
import accountIcon from "../../assets/account.svg";

export default function CalorieCartAppLayout() {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
    <Navbar
      style={{ backgroundColor: "#59b371" }}
      data-bs-theme="dark"
    >
      <Container
        fluid
        /* Lay out the bar in two zones with a big gap in the middle */
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}
      >
        {/* LEFT: crest + title + Store / Deals */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center", marginRight: 16 }}>
            <img src={crest} alt="UW Crest" width="40" height="40" style={{ marginRight: 8 }} />
            Badger Website
          </Navbar.Brand>

          <Nav>
            <NavDropdown title="Store" menuVariant="dark" /* use the prop, not style */ style={{ marginRight: 12 }}>
              <NavDropdown.Item>Meats/Poultry</NavDropdown.Item>
              <NavDropdown.Item>Vegetables</NavDropdown.Item>
              <NavDropdown.Item>Dairy</NavDropdown.Item>
              <NavDropdown.Item>Snacks</NavDropdown.Item>
              <NavDropdown.Item>Beverages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
          </Nav>
        </div>

        {/* RIGHT: Login + Cart + Account */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Nav.Link as={Link} to="/login" style={{ color: "#fff" }}>Login</Nav.Link>

          {/* icon-only buttons without thick outlines */}
          <Button
            variant="light"
            onClick={() => setShowCart(true)}
            style={{ padding: 4, background: "transparent", border: 0 }}
            aria-label="Cart"
          >
            <img src={cart} width="28" height="28" alt="Cart" />
          </Button>

          <Button
            variant="light"
            onClick={() => navigate("/account")}
            style={{ width: 36, 
              height: 36, 
              padding: 0, 
              background: "transparent", border: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
            aria-label="Account"
            title="Account"
          >
            <img src={accountIcon} width="28" height="28" alt="Account" />
    
          </Button>
        </div>
      </Container>
    </Navbar>
    <Offcanvas placement="end" show={showCart} onHide={() => setShowCart(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
              <p>no items yet</p>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />  
    </div>
  );
}
