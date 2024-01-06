import { useNavigate } from "react-router-dom";
import "./picture.css";

function Picture(props) {
  const navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img
        onClick={() => {
          navigate("/detail/" + props.index);
        }}
        src={process.env.PUBLIC_URL + "/images/picture" + props.index + ".jpg"}
        width="80%"
        alt=""
      />
      <h4>{props.picture.title}</h4>
      <p>{props.picture.price}</p>
    </div>
  );
}

export default Picture;
