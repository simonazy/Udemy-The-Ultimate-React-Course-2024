export default function Packing({ itemObj, onDelete, onPacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onPacked(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      {itemObj.packed ? (
        <button>✅</button>
      ) : (
        <button onClick={() => onDelete(itemObj.id)}>❌</button>
      )}
    </li>
  );
}
