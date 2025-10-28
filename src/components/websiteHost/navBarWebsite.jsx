import {Container, Row, Col, Navbar} from "react-bootstrap";
import { Link } from "react-router";
import crest from '../../assets/uw-crest.svg'

export default function calorieCartApp(props) {
    return (<div>

<Container>
    <Navbar>
        <Container>
            <Navbar.Brand as={Link} >Home Page</Navbar.Brand>
             <img
                alt="BadgerChat Logo"
                src={crest}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
        </Container>
    </Navbar>
</Container>
       
    </div>
    );
}

