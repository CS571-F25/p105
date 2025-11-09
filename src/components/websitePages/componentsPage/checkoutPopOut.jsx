import { Offcanvas, Container, Button,Col } from "react-bootstrap";
import { Link, Outlet,useNavigate } from "react-router-dom";

export default function CheckoutComponent({show, handleClose}) {
    const navigate = useNavigate();

    return(<div>
        <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container style={{alignItems:"center", display:"flex"}}>
            <Col>
              <p>no items yet</p>
              <Button  style={{}}variant="primary" onClick={() => {
              handleClose();
              navigate("/checkout");
            }}>
              Checkout
              </Button>
              </Col>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
      <Outlet />  
      </div>
    );
}