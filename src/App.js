import React from 'react';
import './App.css';
import Button from "./components/Button";
import NewMovie from "./components/NewMovie";
import CounterComponent from "./components/CounterComponent";
function App() {
  return (
    <div className="App">
      <Button/>
      {/*<Counter/>*/}
      <CounterComponent/>
      <NewMovie/>
    </div>
  );
}

export default App;
