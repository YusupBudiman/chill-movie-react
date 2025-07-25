import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/home" element={<Home />}>
            {/* <Route path="series" element={<Series />} />
            <Route path="film" element={<Film />} />
            <Route path="daftar-saya" element={<MyList />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
