import { CardBody, Card, ButtonGroup, ToggleButton, From, Row } from "react-bootstrap";
import { useState } from "react";

export default function register() {
    const [Weight,SetWeight] = useState([]);

    return(
        <div>
            <Card>
            <CardBody>
                <Form>
                <FloatingLabel label="Username" className="mb-3">
                    <Form.Control name="username" type="text" placeholder="Username" autoComplete="username" />
                  </FloatingLabel>

                  <FloatingLabel label="Password" className="mb-3">
                    <Form.Control name="password" type="password" placeholder="Password" autoComplete="current-password" />
                  </FloatingLabel>

                  <FloatingLabel label="Pre-Password" className="mb-3">
                    <Form.Control name="pre-password" type="password" placeholder="Confirm Password" autoComplete="current-password" />
                  </FloatingLabel>

                  <Form.Label>Height</Form.Label>
                  <Form.Range />
                  <Form.Label>Height</Form.Label>
                  <Form.Range />

                  <ButtonGroup>
                    <Row>
                  <ToggleButton>
                     Gain Weight
                  </ToggleButton>
                    <ToggleButton>
                       Lose Weight
                    </ToggleButton>
                    </Row>
                  </ButtonGroup>

                  
                </Form>
            </CardBody>
            </Card>

        </div>
    );
}
