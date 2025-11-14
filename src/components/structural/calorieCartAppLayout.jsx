import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import crest from "../../assets/uw-crest.svg";
import cart from "../../assets/cart.svg";
import accountIcon from "../../assets/account.svg";
import CheckoutComponent from "../websitePages/componentsPage/checkoutPopOut.jsx";
export default function CalorieCartAppLayout({ children }) {
  const [items, setItems] = useState([]);
  const [type, setType] = useState(null);  
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  // basic slug for URL
  const slug = (s = "") => s.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-");

  // Fetch just to populate dropdown types
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/CS571-F25/p105/main/src/API/items.json")
      .then((r) => r.json())
      .then((d) => setItems(Array.isArray(d?.items) ? d.items : []))
      .catch(() => setItems([]));
  }, []);

  // unique types
  const types = useMemo(() => {
    const set = new Set(items.map((it) => it.type).filter(Boolean));
    return Array.from(set);
  }, [items]);

  const goToStore = (t) => {
    setType(t);                    
    navigate(`/store/${slug(t)}`);  
  };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#59b371" }} data-bs-theme="dark">
        <Container
          fluid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Brand
              as={Link}
              to="/"
              style={{ display: "flex", alignItems: "center", marginRight: 16 }}
            >
              <img
                src={crest}
                alt="UW Crest"
                width="40"
                height="40"
                style={{ marginRight: 8 }}
              />
              Badger Website
            </Navbar.Brand>

            <Nav>
              <NavDropdown
                title="Store"
                menuVariant="dark"
                style={{ marginRight: 12 }}
              >
                {types.map((t) => (
                  <NavDropdown.Item key={t} onClick={() => goToStore(t)}>
                    {t}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Nav.Link as={Link} to="/login" style={{ color: "#fff" }}>
              Login
            </Nav.Link>

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
              style={{
                width: 36,
                height: 36,
                padding: 0,
                background: "transparent",
                border: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Account"
              title="Account"
            >
              <img src={accountIcon} width="28" height="28" alt="Account" />
            </Button>
          </div>
        </Container>
      </Navbar>
      {children &&
        React.cloneElement(children, {
          items,
          types,
          type,
          setType,
        })}
      <CheckoutComponent
        show={showCart}
        handleClose={() => setShowCart(false)}
      />
    </div>
  );
}
