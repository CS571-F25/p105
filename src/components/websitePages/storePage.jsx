import React, { useEffect, useMemo, useState } from "react";
import { Container, Col, Form, Row, Card } from "react-bootstrap";

export default function StorePage(category) {
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/CS571-F25/p105/0ed3b7ee2bf81c51813d04ef2b27f16d08f79443/src/API/items.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
      })
  }, []);

  const green = "#73b23a"; // just one color constant

  return (
    <div style={{ margin: "0 auto", padding: 16 }}>
      <Container fluid>
        <Row style={{ marginTop: 20 }}>
          {/* LEFT: Filters with green border */}
          <Col md={3}
               style={{
                 border: `8px solid ${green}`,
                 borderRadius: 6,
                 padding: 16,
                 minHeight: 360
               }}>
            <h2 style={{ marginBottom: 12 }}>Filters</h2>
            <Form>
              <Form.Check type="checkbox" label="cheap" />
              <Form.Check type="checkbox" label="high protein" />
              <Form.Check type="checkbox" label="low calories" />
              <Form.Check type="checkbox" label="Discounts" />
            </Form>
          </Col>

          {/* RIGHT: Search box (border) + Cards box (border) */}
          <Col md={9}>
            {/* Search with border */}
            <div
              style={{
                border: `8px solid ${green}`,
                borderRadius: 6,
                padding: 10,
                marginBottom: 24
              }}
            >
              <Form>
                <Form.Control placeholder="search" />
              </Form>
            </div>

            {/* Cards area with border */}
            <div
              style={{
                border: `8px solid ${green}`,
                borderRadius: 6,
                padding: 16,
                minHeight: 420
              }}
            >
              <Row xs={1} sm={2} md={3} className="g-3">
                {items.map((it) => (
                  <Col key={it.name}>
                    <Card>
                      <Card.Img variant="top" src={it.image} alt={it.name} />
                      <Card.Body>
                        <Card.Title style={{ fontSize: 16, marginBottom: 6 }}>
                          {it.name}
                        </Card.Title>
                        <Card.Text style={{ marginBottom: 6 }}>
                          ${it.price.toFixed(2)}
                        </Card.Text>
                        <Card.Text className="text-muted" style={{ fontSize: 13 }}>
                          {it.nutrition.calories_kcal} kcal • {it.nutrition.protein_g}g protein
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}