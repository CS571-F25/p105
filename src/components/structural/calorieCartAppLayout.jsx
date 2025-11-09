import { Container, Navbar, Nav, NavDropdown, Button, Offcanvas } from "react-bootstrap";
import { Link, Outlet,useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import crest from "../../assets/uw-crest.svg";
import cart from "../../assets/cart.svg";
import accountIcon from "../../assets/account.svg";
import CheckoutComponent from "../websitePages/componentsPage/checkoutPopOut.jsx";

export default function CalorieCartAppLayout() {
  const [items, setItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/CS571-F25/p105/0ed3b7ee2bf81c51813d04ef2b27f16d08f79443/src/API/items.json"
      
    )
      .then((r) => r.json())
      .then((d) => setItems(d.items || []));
      navigate("/");
  }, []); 

  const types = useMemo(() => {
    const set = new Set(items.map((it) => it.type));
    return Array.from(set);
  }, [items]);

  const slug = (s="") => s.toLowerCase().replaceAll("/", "-");




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
              {types.map((t) => (
                <NavDropdown.Item key={t} as={Link} to={`/store/${slug(t)}`}>
                  {t}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Nav.Link as={Link} to="/login" style={{ color: "#fff" }}>Login</Nav.Link>

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
            <CheckoutComponent
        show={showCart}
        handleClose={() => setShowCart(false)}
            />
    </div>
  );
}
