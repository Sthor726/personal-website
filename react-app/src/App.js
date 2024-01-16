import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume.js";
import Error from "./components/Error";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={Home()} exact />
          <Route path="/resume" element={Resume()} />
          <Route path="/about" element={About()} />
          <Route element={Error} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
