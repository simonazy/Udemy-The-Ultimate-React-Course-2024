import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";
import { initialItems } from "../data.js";

function App() {
  //Lift state up to first common parent.
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    //setItems is called with a function that takes the current items as an input and returns a new arry; Do not mutate the current one.
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      (items) =>
        items.map((item) => (item.id === id ? { ...item, packed: true } : item)) // Update an array in React
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAddItem} />
      {/* We can pass anything as a prop, including a function.*/}
      <PackingList
        itemsArray={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      {/*pass in a new prop name:itemsArray */}
      <Stats items={items} />
    </div>
  );
}

export default App;
