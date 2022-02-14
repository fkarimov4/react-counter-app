import { useState, useEffect } from "react";
import Coffees from "./Coffees";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
  }, [counter])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>

        <button onClick={() => setCounter(counter + 1)}> + </button>

        <button onClick={() => setCounter(0)}> Reset </button>

        {counter !== 0 && (
          <button onClick={() => setCounter(counter - 1)} className="btn btn-plus"> - </button>
        )}
        <Coffees />
      </header>
    </div>
  );
}

export default App;
