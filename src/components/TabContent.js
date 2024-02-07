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
          <h4>Tab0 Content... (ex: long description of the picture)</h4>,
          <h4>Tab1 Content... (ex: delivery information)</h4>,
          <h4>Tab2 Content... (ex: refund policy)</h4>,
        ][props.tab]
      }
    </div>
  );
}

export default TabContent;
