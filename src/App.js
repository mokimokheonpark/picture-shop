import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";

function App() {
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
        src={process.env.PUBLIC_URL + "/background.jpg"}
        alt=""
      ></img>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/picture1.jpg"}
              width="80%"
              alt=""
            />
            <h4>Title</h4>
            <p>Detail</p>
          </div>
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/picture2.jpg"}
              width="80%"
              alt=""
            />
            <h4>Title</h4>
            <p>Detail</p>
          </div>
          <div className="col-md-4">
            <img
              src={process.env.PUBLIC_URL + "/picture3.jpg"}
              width="80%"
              alt=""
            />
            <h4>Title</h4>
            <p>Detail</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
