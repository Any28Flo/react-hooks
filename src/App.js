import React from 'react';
import './App.css';
import Button from "./components/Button";
import Counter from "./components/Counter";
import CounterComponent from "./components/CounterComponent";
function App() {
  return (
    <div className="App">
      <Button/>
      {/*<Counter/>*/}
      <CounterComponent/>
    </div>
  );
}

export default App;
