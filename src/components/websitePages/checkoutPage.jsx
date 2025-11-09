import { Card, Container , Col, Row} from "react-bootstrap";
import CheckoutButtonCard from "../websitePages/componentsPage/checkoutButtonCard.jsx";
import CheckoutComponent from "../websitePages/componentsPage/checkoutComponent.jsx";
export default function checkout() {
    
    return (
        <div >
         <Container>
            <Row>
              <Col xs={12} md={8}>
            <CheckoutComponent/>
                </Col>

            
              <Col xs={12} md={4}>
                <CheckoutButtonCard/>
                </Col>
            </Row>
         </Container> 
        </div>
      );
    }