export default function Payment({ payment, bill, serviceFee }) {
  return <h3>{`You pay $${payment} ($${bill} + $${serviceFee})`}</h3>;
}
