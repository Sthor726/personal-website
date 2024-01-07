import logo from "./logo.svg";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the main part of the website</p>
      </header>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
