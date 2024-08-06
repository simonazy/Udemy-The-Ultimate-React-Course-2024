import { useReducer } from "react";

const initialState = { balance: 0, loan: 0, isActive: false };
function reducer(state, action) {
  if (!state.isActive && action.type !== "open") return state;

  switch (action.type) {
    case "open":
      return { ...initialState, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "request":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan + 5000,
        balance: state.balance,
      };
    case "pay":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "close":
      if (state.loan > 0 || state.balance !== 0) return state;
      return { ...initialState };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <button onClick={() => dispatch({ type: "open" })}>Open account</button>
      <button onClick={() => dispatch({ type: "deposit", payload: 150 })}>
        Deposit 150
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: 50 })}>
        Withdraw 50
      </button>
      <button onClick={() => dispatch({ type: "request" })}>
        Requested a loan of 5000
      </button>
      <button onClick={() => dispatch({ type: "pay" })}>Pay loan</button>
      <button onClick={() => dispatch({ type: "close" })} disabled={!isActive}>
        Close account
      </button>
    </div>
  );
}

export default App;
