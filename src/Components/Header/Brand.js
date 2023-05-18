import Card from "../UI/Card";
import "./Brand.css";
const Brand = () => {
  const title = "MY POS";
  return (
    <Card className="logo">
      <i class="fa-brands fa-apple logo-icon"></i>
      <h2 className="title">{title}</h2>
    </Card>
  );
};
export default Brand;
