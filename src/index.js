import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Partners from "./Partners";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Partners />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
