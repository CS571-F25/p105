import { Offcanvas, Container, Button, Col, Row } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CheckoutItem from "./checkoutButtonCard"
import CheckoutPopItem from "./checkoutPopItems";
import { AuthContext } from "../../structural/CalorieCartApp";
import { useContext, useMemo } from "react";
export default function CheckoutComponent({items, show, handleClose, qty, add,subtract, handleQtyChange, removeItem}) {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
   const cartItems = useMemo(
    () => (items ?? []).filter((item)=> {
      const count = qty?.[item.id]||0;
      return count + (item.price || 0) * count;
    }, 0),
      [items, qty]
   );

   const subtotal = useMemo(
    () =>
      cartItems.reduce((sum, it) => {
        const count = qty?.[it.id] || 0;
        return sum + (it.price || 0) * count;
      }, 0),
    [cartItems, qty]
   );
  
  const CheckoutBoxStyle = {
    width: "100%",
    height: 600,
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
          {cartItems.length === 0 ? (
                <div>Your cart is empty.</div>
              ) : (
                cartItems.map((item) => (
                  <CheckoutPopItem
                    key={item.id}
                    item={item}
                    qty={qty?.[item.id] || 0}
                    add={() => add(item.id)}
                    subtract={() => subtract(item.id)}
                    handleQtyChange={(e) => handleQtyChange(item.id, e)}
                    removeItem={() => removeItem(item.id)}
                  />
                ))
              )}

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
              {subtotal.toFixed(2)} USD
              </span>
            </div>

            <Button
              variant="dark"
              style={{ width: "100%" }}
              onClick={() => {
                handleClose();
                if (!user) {
                  navigate("/login");
                } else {
                  navigate("/checkout");
                }
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
