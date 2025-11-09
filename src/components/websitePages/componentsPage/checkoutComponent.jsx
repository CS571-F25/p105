import { Card, Col, Row } from "react-bootstrap";
import CheckoutItems from "../componentsPage/checkoutItems.jsx";
export default function CheckoutComponent() {

return(

    <Card 
    style={{
      marginTop:30,
      borderRadius: 21,
      boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif",
    }}
    id="checkout"
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
      <div> Cart</div>
         </Card.Header>
        <Card.Body>
          <CheckoutItems />
          <hr style={{ margin: "8px 0", opacity: 0.3 }} />

          <CheckoutItems />
          <hr style={{ margin: "8px 0", opacity: 0.3 }} />

          <CheckoutItems />
          <hr style={{ margin: "8px 0", opacity: 0.3 }} />

          <CheckoutItems />

        </Card.Body>
    </Card>

);
}