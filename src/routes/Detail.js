function Detail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/images/picture0.jpg"}
            width="100%"
            alt=""
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">Picture 0</h4>
          <p>Description... blabla...</p>
          <p>$100</p>
          <button className="btn btn-danger">Order</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
