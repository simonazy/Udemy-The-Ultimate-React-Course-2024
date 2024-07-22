import { useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "decrease":
      return { ...state, count: state.count - state.step };
    case "increase":
      return { ...state, count: state.count + state.step };
    case "set":
      return { ...state, step: action.payload };
    case "reset":
      return {count: 0, step:1 };
    default:
      throw Error("Unknown action: ", action.type);
  }
}

function App() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [{ count, step }, dispatch] = useReducer(reducer, initialState);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // const resetFunction = () => {
  //   setCount(0);
  //   setStep(1);
  // };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "5px 25px" }}>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) =>
            dispatch({ type: "set", payload: Number(e.target.value) })
          }
        />
        <span>Step: {step}</span>
      </div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) =>
            dispatch({ type: "set", payload: Number(e.target.value) })
          }
        />
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
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
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      )}
    </div>
  );
}

export default App;
