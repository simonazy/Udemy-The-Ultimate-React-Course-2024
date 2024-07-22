import Bill from "./Bill.js";
import Service from "./Service.js";
import Payment from "./Payment.js";
import Reset from "./Reset.js";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [serviceRate1, setServiceRate1] = useState(0);
  const [serviceRate2, setServiceRate2] = useState(0);

  //derieved state
  const serviceRate = (serviceRate1 + serviceRate2) / 2;
  const serviceFee = (bill * serviceRate) / 100;
  const finalPayment = bill + serviceFee;

  function onReset() {
    setBill(0);
    setServiceRate1("");
    setServiceRate2("");
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service selectedRate={serviceRate1} setServiceRate={setServiceRate1}>
        <label>How do you like the service?</label>
      </Service>
      <Service selectedRate={serviceRate2} setServiceRate={setServiceRate2}>
        <label>How do your friend like the service?</label>
      </Service>

      {bill > 0 && (
        <>
          <Payment payment={finalPayment} bill={bill} serviceFee={serviceFee} />
          <Reset handleReset={onReset} />
        </>
      )}
    </div>
  );
}

export default App;
