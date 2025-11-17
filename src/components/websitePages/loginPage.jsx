import { useEffect, useState, useContext } from "react";
import { Form, Button, Card, Container, Row, Col, FloatingLabel, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import SvgTexture from "../../assets/backLogin.svg";
import { AuthContext } from "../structural/CalorieCartApp";
export default function LoginPage() {
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [userName,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [erroText,setErrorText] = useState("");
  
  const { setUser } = useContext(AuthContext);


  const handlLogin = (e)=>  {
    e.preventDefault();
    setErrorText("");
    if(!userName.trim()){
      setErrorText("Please fill in the Username Field");
      return;
    }
    if(!password.trim()){
      setErrorText("Please fill in the Password Field");
      return;
    }
    fetch("https://cs571api.cs.wisc.edu/rest/f25/bucket/account", {
      credentials: "include",
      headers: {
        "X-CS571-ID": CS571.getBadgerId(),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const accounts = Object.values(data.results||{});

          const match = accounts.find(
            (acc) => 
              acc.userName == userName && acc.password == password
            
          );

          if(!match){
            setErrorText("Username or password don't match");
            return;
          }
          setUser(match);
          navigate("/");
      });
  };
  
   


  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <img
        src={SvgTexture}
        alt="background texture"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          objectFit: "cover",
          zIndex: 0,
          animation: "float 20s linear infinite alternate",
        }}
      />

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xxl={5}>
            <Card style={{ backdropFilter: "blur(6px)", background: "rgba(255,255,255,0.85)" }}>
            {erroText && (
              <div
                style={{
                  color: "red",
                  padding: "8px 16px 0 16px",
                  textAlign: "center",
                  fontSize: "0.95rem",
                }}
              >
                {erroText}
              </div>
            )}
              <Card.Body className="p-4">
                <h2 className="mb-3 text-center">Login</h2>


                <Form onSubmit={handlLogin}>
                  <FloatingLabel label="Username" className="mb-3">
                    <Form.Control 
                    name="username"
                     type="text" 
                     placeholder="Username" 
                     autoComplete="none" 
                     value={userName}
                     onChange={(user)=> setUsername(user.target.value)}/>
                  </FloatingLabel>

                  <FloatingLabel label="Password" className="mb-3">
                    <Form.Control 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    autoComplete="new-password" 
                    value={password}
                    onChange={(pass)=> setPassword(pass.target.value)}
                    />
                  </FloatingLabel>

                  <div className="d-grid gap-2">
                    <Button type="submit" variant="success" >Sign in</Button>
                  </div>
                </Form>

                <div className="mt-3 text-center">
                  <small>
                    Don’t have an account? <Link to="/register">Register</Link>
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}