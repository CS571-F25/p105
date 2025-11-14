import { Container, Carousel, Image , Col, Row} from "react-bootstrap";

import imageCaltrack from "../../images/trackCals.png";
import exercise from "../../images/exercise.png";
import healthyDiet from "../../images/healthyDiet.png";
import { use, useEffect, useState } from "react";
import CartComponent from "../websitePages/componentsPage/cartComponent.jsx";


const heroStyle = {
    width: "100%",    
    height: "60vh",    
    objectFit: "cover",
    display: "block",
  };

  const titleStyle = {
    textAlign: "center",
    fontFamily: `'Poppins'`,
    fontWeight: 700,
    letterSpacing: "0.5px",
    margin: "24px 0",   // equal space above/below
    color: "#213547",
  };

export default function HomePage() {
  const [items,setItems] = useState([]);
 
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/CS571-F25/p105/main/src/API/items.json")
      .then((r) => r.json())
      .then((d) => setItems(d?.items ?? [])); 
  }, []);

  const dealItems = items.filter((it) => !!it.discount); 
      


  return (
    <Container fluid style={{ padding: 0 }}>
        <div>
      <h1 style={titleStyle}>Calorie Cart</h1>
      <Carousel >
        <Carousel.Item>
          <Image src={imageCaltrack} alt="First slide" style={heroStyle} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image src={healthyDiet} alt="First slide" style={heroStyle} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image src={exercise} alt="First slide" style={heroStyle} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </div>
      <div style={{ paddingInline: 16 }}>
        <h1 style={{ margin:"2%", justifySelf:"center" , fontFamily: `'Poppins'`}}>Deals</h1>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} style={{marginBottom:20}}>
        {dealItems.map((item, idx) => (
          <Col key={item.description ?? idx}>
            <CartComponent style={{width:"20%"}} item={item} />
          </Col>
        ))}
      </Row>
      </div>
      
    </Container>
  );
}