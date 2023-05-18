import Card from "../UI/Card";
import Items from "./Items";
import CartItem from "./CartItem";
import Total from "./Total";
import "./Main.css";
import { useState } from "react";
const Main = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const totalPriceArr = cartItems.map((item) => +item.itemPrice);
  const totalAmount = totalPriceArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log(totalAmount);
  const cartItemObjHandler = (e) => {
    setCartItems((prevCartArr) => {
      return [e, ...prevCartArr];
    });
  };

  return (
    <main class="main">
      <Card className="left-section">
        <Items
          itemList={props.itemList}
          onGetCartItemObj={cartItemObjHandler}
        />
      </Card>
      <Card className="right-section-top">
        <CartItem cartItems={cartItems} />
      </Card>
      <Total totalAmount={totalAmount} />
    </main>
  );
};
export default Main;
