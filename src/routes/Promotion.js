import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./promotion.css";

function Promotion() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Today's Promotion</h1>

      <Button
        className="button"
        variant="primary"
        size="lg"
        onClick={() => {
          navigate("/promotion/1");
        }}
      >
        Deal1
      </Button>

      <Button
        className="button"
        variant="primary"
        size="lg"
        onClick={() => {
          navigate("/promotion/2");
        }}
      >
        Deal2
      </Button>

      <Button
        variant="primary"
        size="lg"
        onClick={() => {
          navigate("/promotion/3");
        }}
      >
        Deal3
      </Button>

      <div className="outlet">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Promotion;
