import { useState } from 'react';
import './App.css';
import Button from './UI/Button';

function App() {
  
  const [count ,setCount] = useState(0)

  const plusHandler = () => {
    setCount(count + 2)
  }

  const minusHandler = () => {
    if(count > 0){
    setCount(count - 2)
    }
  }

  return (
    <div className="App">
      <Button onClick={plusHandler} >+</Button>
      <h1>{count}</h1>
      <Button onClick={minusHandler} >-</Button>
    </div>
  );
}

export default App;
