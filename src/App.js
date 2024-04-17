import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./static/Router";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route>
          {Routers?.map((el) => (
            <Route key={el.id} path={el.path} element={el.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
