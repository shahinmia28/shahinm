import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import WebDesign from "./components/webDesign/WebDesign";
import WebDevelop from "./components/webDevelop/WebDevelop";
import Contact from "./components/contact/Contact";
import Cv from "./components/cv/Cv";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Router>
        <div className="header">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/design" element={<WebDesign />} />
          <Route path="/develop" element={<WebDevelop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
