import React, { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import Convertor from "./components/Convertor";

function App() {
  const [price, setprice] = useState("0");

  const dataHandler = (e) => {
    setprice(e);
  };

  return (
    <div className="App">
      <div className="card">
        <div className="title">
          <h2>CRYPTOCON</h2>
        </div>
        <Info onSelect={dataHandler} />
        <Convertor items={price} />
      </div>
    </div>
  );
}

export default App;
