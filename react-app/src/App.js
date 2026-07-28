import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import Resume from "./pages/Resume.js";
import Projects from "./pages/Projects.js";
import Error from "./pages/Error.js";
import Navigation from "./pages/Navigation.js";
import Footer from "./pages/Footer.js";
import Games from "./pages/Games.js";
import ScrollToTop from "./ScrollToTop.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Support from "./pages/Support.js";


// Perimeter's privacy/support pages have their own full-page layout
// (green background, wordmark, etc.), so the site chrome is hidden for them.
function AppLayout() {
  const location = useLocation();
  const hideChrome = location.pathname.startsWith("/perimeter");

  return (
    <div className="App">
      {!hideChrome && <Navigation />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/perimeter/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/perimeter/support" element={<Support />} />
        {/* <Route path="/unsubscribe" element={<Unsubscribe />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      {!hideChrome && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;