import Button from "../UI/Button";
import "./SearchInput.css";
const SearchInput = (props) => {
  return (
    <form action="#">
      <input type="text" placeholder="Search Item" className="search_input" />
      <Button className="btn search-btn">
        <i class="fa-solid fa-magnifying-glass-plus"></i>
      </Button>
    </form>
  );
};
export default SearchInput;
