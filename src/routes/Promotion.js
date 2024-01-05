import { Outlet, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./promotion.css";

function Promotion() {
  const navigate = useNavigate();

  return (
    <div className="promotion">
      <h1>Promotion</h1>

      <Button
        className="promotion-button"
        variant="primary"
        size="lg"
        onClick={() => {
          navigate("/promotion/1");
        }}
      >
        Deal1
      </Button>

      <Button
        className="promotion-button"
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

      <div className="promotion-outlet">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Promotion;
