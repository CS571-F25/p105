import { Card, Button, Col} from "react-bootstrap";
export default function CheckoutButtonCard() {
return (
   
    <Card 
    style={{
      marginTop:30,
      height: 300,
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
      <div> Checkout</div>

    </Card.Header>
    <Card.Body>
        <Col style={{height:150}}>

        </Col>
      <hr/>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <Button style={{borderRadius:15}} >
          Procceed to Checkout
      </Button>
      </div>
    </Card.Body>
</Card>
);
}