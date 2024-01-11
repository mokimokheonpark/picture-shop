import Picture from "../components/Picture";

function Visited(props) {
  let visited = localStorage.getItem("visited");
  visited = JSON.parse(visited);
  console.log(visited);
  return (
    <>
      <h1>You recently visited the following pictures</h1>

      <div className="container">
        <div className="row">
          {visited
            ? visited.map((v, i) => {
                return (
                  <Picture picture={props.pictures[v]} index={v} key={i} />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Visited;
