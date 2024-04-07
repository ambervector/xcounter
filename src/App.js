import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </>
  );
}

export default App;
