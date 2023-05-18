import { useState } from "react";
import "./NewItemForm.css";
const DUMMY_CATEGORY = [
  { id: 1, categoty: "Health" },
  { id: 2, categoty: "Beauty" },
  { id: 3, categoty: "Electronic Device" },
  { id: 4, categoty: "Fashion" },
  { id: 5, categoty: "Home and Life Style" },
];

const NewItemForm = (props) => {
  const [itemCat, setItemCat] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");
  const itemCatHandler = (e) => {
    setItemCat(e.target.value);
  };
  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };
  const itemPriceHandler = (e) => {
    setItemPrice(e.target.value);
  };
  const itemQtyHandler = (e) => {
    setItemQty(e.target.value);
  };
  const newItemFormHandler = (e) => {
    e.preventDefault();
    const newItem = {
      itemId: Math.random(),
      itemCat: itemCat,
      itemName: itemName,
      itemPrice: itemPrice,
      itemQty: itemQty,
    };
    props.onNewItemData(newItem);
    setItemCat("");
    setItemName("");
    setItemPrice("");
    setItemQty("");
  };
  return (
    <form action="" className="new-item-form" onSubmit={newItemFormHandler}>
      <label htmlFor="item-cat">Category Name</label>
      <select name="" id="item-cat" onChange={itemCatHandler}>
        {DUMMY_CATEGORY.map((cat) => (
          <option value={cat.id}>{cat.categoty}</option>
        ))}
      </select>
      <label htmlFor="item-name">Item Name</label>
      <input
        type="text"
        id="item-name"
        onChange={itemNameHandler}
        value={itemName}
      />
      <label htmlFor="item-price">Price</label>
      <input
        type="number"
        id="item-price"
        onChange={itemPriceHandler}
        value={itemPrice}
      />
      <label htmlFor="item-qty">Quantity</label>
      <input
        type="number"
        id="item-qty"
        onChange={itemQtyHandler}
        value={itemQty}
      />
      <button className="btn">Confirm</button>
    </form>
  );
};
export default NewItemForm;
