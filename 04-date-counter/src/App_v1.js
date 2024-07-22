import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const resetFunction = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "5px 25px" }}>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setCount(() => count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount(() => count + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? `Today is ${date.toLocaleDateString()}`
          : count > 0
          ? `After ${count} days is ${date.toLocaleDateString()}`
          : `Before ${count} days is ${date.toLocaleDateString()}`}
      </p>
      {count === 0 && step === 1 ? (
        ""
      ) : (
        <button onClick={resetFunction}>Reset</button>
      )}
    </div>
  );
}

export default App;
