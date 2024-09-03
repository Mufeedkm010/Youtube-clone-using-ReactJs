import React from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Grid from "./components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <Nav />
      <div className="d-flex">
        <Sidebar />
        <div className="content-container p-4">
          <Grid />
        </div>
      </div>
    </div>
  );
}

export default App;
