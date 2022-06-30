import React, { useState, useReducer } from 'react';
import './App.css';
const Actions = {
  increment: 'increment',
  decrement: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const [counter, setCounter] = useState(0);

  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: Actions.increment })
  }
  function decrement() {
    dispatch({ type: Actions.decrement })
  }
  return (
    <>
      <h1>usereducer</h1>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>

      <h1>usestate</h1>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>)

}


export default App;
