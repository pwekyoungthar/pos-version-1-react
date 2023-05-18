import Card from "../UI/Card";
import Button from "../UI/Button";
import "./SingleCartItem.css";
const SingleCartItem = (props) => {
  return (
    <div className="cart-item">
      <ul className="item-info">
        <li>{props.cartItem.itemName}</li>
        <li>- {props.cartItem.itemPrice} MMK</li>
      </ul>
      <Card className="count">{props.cartItem.count}</Card>
      <Card className="action-buttons">
        <Button>+</Button>
        <Button>-</Button>
        <Button>
          <i class="fa-solid fa-trash"></i>
        </Button>
      </Card>
    </div>
  );
};
export default SingleCartItem;
