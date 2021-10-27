import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count => count + 1)
  }
  const handleDecrement = () => {
    setCount(count => count - 1)
  }

  return (
    <div className="App">
     <h1>Count Anything!</h1>
     <p>{count}</p>
     <button onClick={handleIncrement}>+</button>
     <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
