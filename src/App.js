import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import Picture from "./components/Picture";
import data from "./data.js";

function App() {
  const [pictures, setPictures] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Picture-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <img
        className="main-bg"
        src={process.env.PUBLIC_URL + "/images/background.jpg"}
        alt=""
      ></img>

      <div className="container">
        <div className="row">
          {pictures.map((_, i) => {
            return <Picture picture={pictures[i]} index={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
