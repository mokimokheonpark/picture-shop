import "./tabcontent.css";

function TabContent(props) {
  return [
    <h4 className="tab-content">Tab0 Content... blabla...</h4>,
    <h4 className="tab-content">Tab1 Content... blabla...</h4>,
    <h4 className="tab-content">Tab2 Content... blabla...</h4>,
  ][props.tab];
}

export default TabContent;
