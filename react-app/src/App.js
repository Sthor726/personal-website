import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Resume from "./pages/Resume.js";
import Projects from "./pages/Projects.js";
import Error from "./pages/Error.js";
import Navigation from "./pages/Navigation.js";
import Unsubscribe from "./pages/Unsubscribe.js";
import Footer from "./pages/Footer.js";
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
