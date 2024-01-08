import { useEffect, useState } from "react";
import "./tabcontent.css";

function TabContent(props) {
  const [animationStatus, setAnimationStatus] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationStatus("animation-end");
    }, 100);
    return () => {
      clearTimeout(timeout);
      setAnimationStatus("");
    };
  }, [props.tab]);

  return (
    <div className={"tab-content animation-start " + animationStatus}>
      {
        [
          <h4>Tab0 Content... blabla...</h4>,
          <h4>Tab1 Content... blabla...</h4>,
          <h4>Tab2 Content... blabla...</h4>,
        ][props.tab]
      }
    </div>
  );
}

export default TabContent;
