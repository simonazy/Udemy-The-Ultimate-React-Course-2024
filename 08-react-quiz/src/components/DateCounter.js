import { useReducer } from "react";

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  switch (action.type) {
    case "setStep":
      return { ...state, step: action.payload };
    case "setCount":
      return { ...state, count: action.payload };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "reset": {
      return initialState;
    }
    default:
      throw new Error("Unknown action");
  }
  //   if (action.type === "inc") return state + action.payload;
  //   if (action.type === "dec") return state - action.payload;
  //   if (action.type === "setCount") return action.payload;
}

function DateCounter() {
  //   const [step, setStep] = useState(0);
  //   const [count, setCount] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date("July 11 2027");
  date.setDate(date.getDate() + count);

  const defineCount = (e) => {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = (e) => {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const inc = function () {
    // setCount(() => count + step);
    dispatch({ type: "inc", payload: 1 });
  };

  const dec = function () {
    // setCount(() => count - step);
    dispatch({ type: "dec", payload: -1 });
  };
  const reset = function () {
    // setStep(0);
    // setCount(0);
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default DateCounter;
