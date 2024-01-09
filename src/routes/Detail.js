import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import "./detail.css";
import TabContent from "../components/TabContent";
import { orderPicture } from "../store/cartSlice";

function Detail(props) {
  const [animationStatus, setAnimationStatus] = useState("");
  useEffect(() => {
    setAnimationStatus("animation-end");
    return () => {
      setAnimationStatus("");
    };
  }, []);
  const { id } = useParams();
  const picture = props.pictures.find(function (p) {
    return p.id === parseInt(id);
  });
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className={"container animation-start " + animationStatus}>
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/images/picture" + id + ".jpg"}
            width="100%"
            alt=""
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{picture.title}</h4>
          <p>{picture.detail}</p>
          <p>{picture.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                orderPicture({
                  id: picture.id,
                  title: picture.title,
                  quantity: 1,
                })
              );
            }}
          >
            Order
          </button>
        </div>
      </div>

      <Nav className="tabs" variant="tabs" defaultActiveKey="tab0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)} eventKey="tab0">
            Tab0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey="tab1">
            Tab1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)} eventKey="tab2">
            Tab2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </div>
  );
}

export default Detail;
