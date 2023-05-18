import Card from "../UI/Card";
import "./Total.css";
const Total = (props) => {
  return (
    <Card className="right-section-bottom">
      <span>Total Amount : </span>
      <span>{props.totalAmount} </span>
      <span> - MMK</span>
      <button className="btn-buy">Buy</button>
    </Card>
  );
};
export default Total;
