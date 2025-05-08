import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import Error from "./components/Error.js";
import Navigation from "./components/Navigation.js";
import Unsubscribe from "./components/Unsubscribe.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./ScrollToTop.js";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
