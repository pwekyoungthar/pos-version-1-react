import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Overlay from "./Components/UI/OverLay";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";
function App() {
  const [overlay, setOverlay] = useState(false);
  const [itemList, setItemList] = useState([]);
  const overlayTrueState = (e) => {
    setOverlay(e);
  };
  const overlayFalseState = (e) => {
    setOverlay(e);
  };
  const allItemHander = (e) => {
    setItemList((prevItems) => [e, ...prevItems]);
  };

  return (
    <>
      {overlay ? <Overlay onFalseOverlay={overlayFalseState} /> : ""}
      {overlay ? <Modal onGetAllItems={allItemHander} /> : ""}

      <Header onTrueOverlay={overlayTrueState} />
      <Main itemList={itemList} />
    </>
  );
}

export default App;
