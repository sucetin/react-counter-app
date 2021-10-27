import './App.css';
import { useState , useEffect} from "react";

function App() {

  const [count, setCount] = useState(() => {
    const saved = parseInt(localStorage.getItem('number'));
    return saved || 0;
  });
  useEffect(() => {
    localStorage.setItem('number', count)
  }, [count]);

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
