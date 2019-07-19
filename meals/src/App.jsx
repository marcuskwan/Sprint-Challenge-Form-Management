import React from 'react';
import Login from "./components/Login"
import Meals from "./components/Meals"
import Route from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/meals" component={Meals} />
    </div>
  );
}

export default App;
