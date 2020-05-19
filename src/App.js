import React, { useState} from 'react';
import './App.css';
import Button from "./components/Button";
import NewMovie from "./components/NewMovie";
import CounterComponent from "./components/CounterComponent";
import AdminContext from  "./Context/AdminContext";
import Level2 from "./components/Level2";
import MovieList from "./components/MovieList";

function App() {
    const adminContext = useState({
        firstName : "Analin",
        lasName : "Flores",
        nickName : "Daedra",
        suffix : 1,
        email : "foglzerika@gmail.com"
    });
  return (
      <AdminContext.Provider value={adminContext}>
        <div className="App">
          <Button/>
          {/*<Counter/>*/}
          <CounterComponent/>
          <NewMovie/>
          <Level2/>
          <MovieList/>
        </div>
      </AdminContext.Provider>
  );
}

export default App;
