import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Deal1 from "./components/Deal1";
import Deal2 from "./components/Deal2";
import Deal3 from "./components/Deal3";
import Cart from "./routes/Cart";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Promotion from "./routes/Promotion";
import Visited from "./routes/Visited";
import data from "./data";

function App() {
  const [pictures, setPictures] = useState(data);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("visited") === null) {
      localStorage.setItem("visited", JSON.stringify([]));
    }
  }, []);
  // const result = useQuery(["query"], () => {
  //   return axios.get("").then((a) => {
  //     return a.data;
  //   });
  // });

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Picture-Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/promotion");
              }}
            >
              Promotion
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/visited");
              }}
            >
              Visited
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home pictures={pictures} />} />
        <Route path="/detail/:id" element={<Detail pictures={pictures} />} />
        <Route path="/promotion" element={<Promotion />}>
          <Route path="1" element={<Deal1 />}></Route>
          <Route path="2" element={<Deal2 />}></Route>
          <Route path="3" element={<Deal3 />}></Route>
        </Route>
        <Route
          path="/visited"
          element={<Visited pictures={pictures} />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
