import { useParams } from "react-router-dom";

function Detail(props) {
  const { id } = useParams();
  const picture = props.pictures.find(function (p) {
    return p.id === parseInt(id);
  });

  return (
    <div className="container">
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
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
