import React from "react";
import Blogspost from "./Components/Blogspost";
import "bootstrap/dist/css/bootstrap.min.css";
import Singelblog from "./Components/Singelblog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Blogspost}></Route>
          <Route exact path="/singelblog/:id" Component={Singelblog}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
