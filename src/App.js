import logo from './logo.svg';
import './App.css';
import React, {useState, useCallback} from 'react';

function App() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const increment = useCallback(()=> setCount(count+1, [count]) )

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <h3>Input Text: {input}</h3>
      <h3>Count:{count} </h3>
      <hr />
      <ChildComponent count={count} onClick={increment}/>
    </div>
  );
}
const ChildComponent = React.memo(function ChildComponent({count, onClick}) {
  console.log('ChildComponent render');
  return(
    <div>
      <h2>This is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h3>Count: {count}</h3>
    </div>
  ); 
});

export default App;