import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit(); //initialize Materialize JS
  });

  return (
    <div className='App'>
      <SearchBar />
      <div className='container'>
        {" "}
        <Logs />
      </div>
    </div>
  );
}

export default App;
