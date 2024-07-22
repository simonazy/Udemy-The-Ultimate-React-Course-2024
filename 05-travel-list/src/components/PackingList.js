import { useState } from "react";
import Packing from "./Packing.js";

export default function PackingList({
  itemsArray,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;
  if (sortBy === "input") {
    sortedItem = itemsArray;
  } else if (sortBy === "description") {
    sortedItem = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "packed") {
    sortedItem = itemsArray
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Packing
            itemObj={item}
            onDelete={onDeleteItem}
            onPacked={onToggleItem}
            key={item}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}
