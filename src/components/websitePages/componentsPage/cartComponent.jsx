import React from "react";
import { Card, Button, Table } from "react-bootstrap";

export default function CartComponent() {

  // const { name = "Unnamed", imgSrc, nutrition = {} } = item;
  // const cals = nutrition.calories ?? "-";
  // const prot = nutrition.protein ?? "-";
  // const fat  = nutrition.fat ?? "-";
  // const carb = nutrition.carbs ?? "-";

  return (
    <Card style={{ marginBottom: 16 }}>
      <Card.Img variant="top" src="https://pngimg.com/d/broccoli_PNG2820.png"
     /> 
      <Card.Body>
        <Card.Title>Chicken Breast</Card.Title>
        <h4>Price $5</h4>
        <Table style={{borderRadius:15}}>
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
              <td>200 Call</td>
              <td>20g</td>
              <td>5g</td>
              <td>5g</td>
            </tr>
          </tbody>
        </Table>

        <Button>Add</Button>
      </Card.Body>
    </Card>
  );
}
