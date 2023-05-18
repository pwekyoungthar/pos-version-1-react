import "./Overlay.css";
const Overlay = (props) => {
  const removeOverLayHandler = () => {
    props.onFalseOverlay(false);
  };
  return <div className="back-drop" onClick={removeOverLayHandler}></div>;
};
export default Overlay;
