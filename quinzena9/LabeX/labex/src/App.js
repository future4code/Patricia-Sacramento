import React from "react";
import Router from "./route/Router";
import { Header } from "./pages/styled";




function App() {
  return (
    <div className="App">
      <Header>
        <h1>LABEX</h1>
      </Header>
      <Router />

    </div>
  );
}

export default App;
