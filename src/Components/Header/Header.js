import Brand from "./Brand";
import SearchInput from "./SearchInput";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Header.css";
const Header = (props) => {
  const newItemBtnHandler = () => {
    props.onTrueOverlay(true);
  };
  return (
    <header className="header">
      <Brand />
      <SearchInput />
      <Button className="btn newItem-btn" onClick={newItemBtnHandler}>
        New Item
      </Button>
      {/* <button className="btn newItem-btn">New Item</button> */}
      <Card className="profile">
        <img
          src="./img/profile.jpg"
          alt="Seller Profile"
          className="profile-img"
        />
      </Card>
    </header>
  );
};
export default Header;
