import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rota2" element={<>Rota 2</>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
