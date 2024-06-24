// App.js
import React, { useState, useCallback } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <Provider store={store}>
      <div className="App">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={increment}>Increment</button>
        <h3>Input Text: {input}</h3>
        <h3>Count: {count}</h3>
        <hr />
        <ChildComponent count={count} onClick={increment} />
        <CartComponent />
      </div>
    </Provider>
  );
}

const ChildComponent = React.memo(function ChildComponent({ count, onClick }) {
  console.log('ChildComponent render');
  return (
    <div>
      <h2>This is a child component</h2>
      <button onClick={onClick}>Increment</button>
      <h3>Count: {count}</h3>
    </div>
  );
});

const CartComponent = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.item);

  const addItem = () => {
    dispatch({ type: 'ADD_ITEM', payload: { name: 'NewItem', quantity: 1 } });
  };
  
    console.log((item.quantity>0?item.quantity:"abc"));
    console.log(item?.name);
  
};

export default App;
