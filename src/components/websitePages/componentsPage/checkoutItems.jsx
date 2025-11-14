import { Row, Col, Table } from "react-bootstrap";

export default function CheckoutItems({checkingOut}) {


  return (
    <div>
     <Row>
        <Col md={2}>
            <img src="https://www.google.com/imgres?q=image%20holder&imgurl=https%3A%2F%2Fendlessicons.com%2Fwp-content%2Fuploads%2F2012%2F11%2Fimage-holder-icon-614x460.png&imgrefurl=https%3A%2F%2Fendlessicons.com%2Ffree-icons%2Fimage-folder-icon%2F&docid=aBuCQ1Yer3oSPM&tbnid=ce_nUW0vLp3UDM&vet=12ahUKEwjd0ZvZiuSQAxVYl4kEHZXJI7QQM3oECBsQAA..i&w=614&h=460&hcb=2&ved=2ahUKEwjd0ZvZiuSQAxVYl4kEHZXJI7QQM3oECBsQAA" alt="Item" style={{width:"100%"}}/>
        </Col>
        <Col md={5}>
            <h5>This is a very cool food item where I describe im made it.</h5>
            <h6>Price: #</h6>
           checkingOut &&({ <Table bordered size="sm" className="mb-3">
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
              <td>Calories</td>
              <td>Protein</td>
              <td>Fat</td>
              <td>Carb</td>
            </tr>
          </tbody>
        </Table>})

        </Col>
     </Row>
    </div>
  );
}