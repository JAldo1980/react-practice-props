import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  function handlePlus() {
    setState((prevCount) => prevCount + 1);
  }

  function handleMinus() {
    setState((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={handleMinus}>
        –
      </button>
      <div className="counter--count">
        <h1>{state}</h1>
      </div>
      <button className="counter--plus" onClick={handlePlus}>
        +
      </button>
    </div>
  );
}

export default App;
