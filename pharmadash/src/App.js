import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sedes from "./components/Sedes";
// Importar otros componentes según sea necesario

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sedes" element={<Sedes />} />
          {/* Agregar otras rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
