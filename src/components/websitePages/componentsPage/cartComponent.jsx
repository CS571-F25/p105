import React from "react";
import { Card, Button, Table } from "react-bootstrap";

export default function CartComponent({ item, onCheckout }) {
  if (!item) return null;

  const { name = "Unnamed", imgSrc, nutrition = {} } = item;
  const cals = nutrition.calories ?? "-";
  const prot = nutrition.protein ?? "-";
  const fat  = nutrition.fat ?? "-";
  const carb = nutrition.carbs ?? "-";

  return (
    <Card style={{ marginBottom: 16 }}>
      {imgSrc ? <Card.Img variant="top" src={imgSrc} alt={name} /> : null}
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Table bordered size="sm" className="mb-3">
          <thead>
            <tr>
              <th>Calories</th>
              <th>Protein</th>
              <th>Fat</th>
              <th>Carbs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{cals}</td>
              <td>{prot}</td>
              <td>{fat}</td>
              <td>{carb}</td>
            </tr>
          </tbody>
        </Table>

        <Button onClick={() => onCheckout?.(item)}>Checkout</Button>
      </Card.Body>
    </Card>
  );
}
