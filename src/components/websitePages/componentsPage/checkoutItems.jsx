import { Row, Col, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function CheckoutItems({
  item,
  qty,
  add,
  subtract,
  handleQtyChange,
  removeItem,
}) {
  const qtyInputStyle = {
    width: 40,
    padding: 0,
    textAlign: "center",
    height: "1.8rem",
    fontWeight: 600,
    fontSize: 14,
  };

  const removeButtonStyle = {
    padding: "4px 12px",
    backgroundColor:"#dc3545",
    border: "none",
    color: "white",
    width:"100%",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    marginTop: 8,
    marginBottom: 8,
  };

  const qtyWrapperStyle = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    border: "1px solid #ddd",
    padding: "4px 10px",
      width: "fit-content"
  };

  const qtyButtonStyle = {
    padding: "2px 8px",
    borderRadius: 999,
    border: "none",
    backgroundColor: "transparent",
    fontSize: 18,
  };
  const cals = item?.nutrition?.calories_kcal ?? "-";
  const prot = item?.nutrition?.protein_g ?? "-";
  const fat = item?.nutrition?.fat_g ?? "-";
  const carb = item?.nutrition?.carbs ?? "-";

  return (
    <div>
      <Row>
        <Col md={2}>
          <img
          src={item.image}
            alt="Item"
            style={{ maxWidth: "100%", maxHeight: "120px", marginRight:10 ,objectFit: "contain",display: "block"}}
          />
        </Col>
        <Col md={4}>
          <h5>{item?.description || "Food item"}</h5>
          <h6>
            Price: ${item?.price?.toFixed ? item.price.toFixed(2) : item?.price}
          </h6>
          <Col>
           
            <div style={qtyWrapperStyle}>
              <button style={qtyButtonStyle} onClick={subtract}>
                −
              </button>
              <Form.Control
                type="text"
                inputMode="numeric"
                value={qty}
                onChange={handleQtyChange}
                style={qtyInputStyle}
                placeholder="0"
              />
              <button style={qtyButtonStyle} onClick={add}>
                +
              </button>
            
            </div>
            
            
          </Col>
        </Col>
        <Col md={5}>
          <Table bordered size="sm" style={{ marginBottom: 0 }}>
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
          <button
              style={removeButtonStyle}
              aria-label="Remove item"
              onClick={removeItem}
            >
              remove
            </button>
        </Col>
        
      </Row>
      
    </div>
    
  );
}
