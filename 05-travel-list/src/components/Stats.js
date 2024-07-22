export default function Stats({ items }) {
  //early return
  if (!items.length)
    return (
      <footer className="stats">
        <em>Begin to add and pack your items now 🚀!</em>
      </footer>
    );

  //derived state
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packPercentage = (numPackedItems * 100) / numItems;

  return (
    <footer className="stats">
      <em>
        {packPercentage === 100
          ? "You are ready to go ✈️!"
          : `🧳 You have ${numItems} items on your list, and you already packed ${numPackedItems}`}
      </em>
    </footer>
  );
}
