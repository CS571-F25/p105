import { Container, Carousel, Image , Col} from "react-bootstrap";

import imageCaltrack from "../../images/trackCals.png";
import exercise from "../../images/exercise.png";
import healthyDiet from "../../images/healthyDiet.png";

const heroStyle = {
    width: "100vw",    
    height: "60vh",    
    objectFit: "cover",
    display: "block",
  };

  const titleStyle = {
    textAlign: "center",
    fontFamily: `'Poppins', 'Nunito', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 700,
    letterSpacing: "0.5px",
    margin: "24px 0",   // equal space above/below
    color: "#213547",
  };

export default function HomePage() {
  return (
    <Container fluid  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Col>
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
      </Col>
    </Container>
  );
}