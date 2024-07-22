export default function Service({ children, setServiceRate, selectedRate}) {
  return (
    <div>
      <label>{children}</label>
      <select onChange={(e)=>setServiceRate(Number(e.target.value))} value={selectedRate}>
        <option value="">--Please choose an option--</option>
        <option value="5">It is average(5%)</option>
        <option value="10">It is good(10%)</option>
        <option value="15">Absolutely amazing!(15%)</option>
      </select>
    </div>
  );
}
