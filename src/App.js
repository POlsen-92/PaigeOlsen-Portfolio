// CSS and React
import React, { useState, useEffect } from "react";
import API from "./utils/API";

// Components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/NavBar";
import Home from "./components/Pages/Home";


function App() {


    
  return (
    <Router>
      <div className="App">
        <NavBar 
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home

              />
            }
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
