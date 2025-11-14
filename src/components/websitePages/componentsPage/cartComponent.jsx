// cartComponent.jsx
import React from "react";
import { Card, Button, Table , Form} from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";

export default function CartComponent({ item, cardStyle}) {
  const cals = item?.nutrition?.calories_kcal ?? "-";
  const prot = item?.nutrition?.protein_g ?? "-";
  const fat  = item?.nutrition?.fat_g ?? "-";
  const carb = item?.nutrition?.carbs ?? "-";

  const priceStyle = {
    fontSize: 20,
    marginBottom: "0.6rem",
  };

  const cardImage = {
    padding:20,
    width: "100%",
    height: 180,       
    objectFit: "contain", 
    display: "block",
  };

  const buttonDesign = {
    width:"50%",
    display:"block"
  }

  const tableStyle = {
    width: "94%",
    margin:10 ,
    fontSize: "clamp(0.2rem, 0.7vw, 0.52rem)", // smaller + responsive
    tableLayout: "fixed", 
    alignPropType:"center"                      // force equal column widths
  };

  const headerCellStyle = {
    padding: "0.1rem 0.1rem",
    textAlign: "center",
    wordWrap: "break-word",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: 9, // inherit from table
  };

  const bodyCellStyle = {
    padding: "0.2rem 0.25rem",
    textAlign: "center",
    fontSize: 15,
  }

  return (
    <Card style={{ margin: 3 , alignItems:"center", ...cardStyle}}>
      <Card.Img variant="top" src={item?.image} alt={item?.description || "Product"}  style={cardImage}/>
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title style={{  fontSize:18 , fontWeight:800,}}>{item?.description || "Unknown Item"}</Card.Title>
        <h4 style={priceStyle}> Price ${item?.price?.toFixed ? item.price.toFixed(2) : (item?.price || "0.00")}</h4>
        <div >
        <Table style={tableStyle}>
          <thead>
            <tr>
              <th style={headerCellStyle}>Calories</th>
              <th style={headerCellStyle}>Protein (g)</th>
              <th style={headerCellStyle}>Fat (g)</th>
              <th style={headerCellStyle}>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={bodyCellStyle}>{cals}</td>
              <td  style={bodyCellStyle}>{prot}</td>
              <td style={bodyCellStyle}>{fat}</td>
              <td style={bodyCellStyle}>{carb}</td>
            </tr>
          </tbody>
        </Table>
        </div>
        <Button style={buttonDesign}>Add</Button>
          <Form.Group>
              <Form.Label>

              </Form.Label>
              <Form.Control type="number" placeholder="0" />
          </Form.Group>
      </Card.Body>
    </Card>
  );
  
}