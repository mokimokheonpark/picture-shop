import { useState } from "react";
import Picture from "../components/Picture";
import data from "../data";

function Home() {
  const [pictures, setPictures] = useState(data);

  return (
    <>
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
    </>
  );
}

export default Home;
