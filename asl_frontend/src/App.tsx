import React from 'react';
import {Fragment, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/dashboard";

function App() {
    const [auth, setAuth] = useState(null);
  return (
    <div className="App">
        {auth === null && (

        <h1>loading</h1>
        )}
        {auth && (
            <Dashboard />
        )}



    </div>
  );
}

export default App;
