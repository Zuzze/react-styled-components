import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/button";
import { Link } from "./components/link";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Link url="#">Link</Link>
      <Button color="primary">Open</Button>
      <Button color="secondary">Next</Button>
    </div>
  );
}

export default App;
