import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [select, setSelect] = useState("Produce");

  function handleSelect (event) {
    setSelect(event.target.value);
  }
  function handleNameChange (event) {
    setItemName(event.target.value);
  }
  function handleSubmit (event){
    event.preventDefault();
    onItemFormSubmit({id: uuid(), name: itemName, category: select});
    setItemName("");
    setSelect("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={select} onChange={handleSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
