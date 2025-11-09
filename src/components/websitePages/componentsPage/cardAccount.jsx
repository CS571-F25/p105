
import { Card, Button } from "react-bootstrap";
import muscleIcon from "../../../assets/muscleIcon.svg";


export default function CardAccount() {

return (
    <Card
    style={{
      margin:30,
      width: 300,
      height: 400,
      borderRadius: 21,
      boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
      fontFamily: "sans-serif",
    }}
    id="AccountInfo"
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
      <div>Account Info</div>
      <Button size="sm" variant="light" style={{ color: "#2b7a4b",borderRadius:10  }}>
        Edit
      </Button>
      
    </Card.Header>
    <img
      style={{ height: 220, padding: 20 }}
      src={muscleIcon}
      alt="user icon"
    />

    <Card.Body>
      <Card.Title>User</Card.Title>
      <Card.Text style={{ marginBottom: 4 }}>
        Height: 6'0&quot;
      </Card.Text>
      <Card.Text style={{ marginBottom: 0 }}>
        Weight: 180 lbs
      </Card.Text>
    </Card.Body>
    </Card>
);
}