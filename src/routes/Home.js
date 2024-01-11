import Picture from "../components/Picture";
import "./home.css";

function Home(props) {
  return (
    <>
      <img
        className="main-bg"
        src={process.env.PUBLIC_URL + "/images/background.jpg"}
        alt=""
      ></img>

      <div className="container">
        <div className="row">
          {props.pictures.map((_, i) => {
            return <Picture picture={props.pictures[i]} index={i} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
