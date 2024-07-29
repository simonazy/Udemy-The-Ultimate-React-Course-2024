import "./App.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";

function App() {
  const [number, setNumber] = useState(1);
  const [original, setOriginal] = useState("USD");
  const [destination, setDestination] = useState("EUR");
  const [output, setOutput] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function getCurrentCoverter() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${number}&from=${original}&to=${destination}`
          );
          if (!res.ok) {
            throw new Error("Please choose different currency.");
          }

          const data = await res.json();
          setOutput(data.rates[destination]);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setError(err.message);
          setIsLoading(false);
          setOutput("");
        }
      }
      getCurrentCoverter();
    },
    [destination, number, original]
  );

  return (
    <div>
      <label>Currency Converter</label>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        disabled={isLoading}
      />
      <select
        value={original}
        onChange={(e) => setOriginal(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      {error ? (
        <Error errMessage={error} />
      ) : (
        <p>
          {output} {destination}
        </p>
      )}
    </div>
  );
}

export default App;

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
