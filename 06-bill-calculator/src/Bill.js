export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much is the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        placeholder="amount"
      />
    </div>
  );
}
